import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

/* ──────────────────────────────────────────────────────────────────────────
   REUSABLE VALIDATORS – Define once, use everywhere
   ──────────────────────────────────────────────────────────────────────── */

const memberValidator = v.object({
  userId: v.id("users"),
  role: v.union(v.literal("admin"), v.literal("member")),
  joinedAt: v.number(),
});

const groupValidator = v.object({
  name: v.string(),
  description: v.string(),
  createdBy: v.id("users"),
  members: v.array(memberValidator),
});

/* ──────────────────────────────────────────────────────────────────────────
   1. getAllContacts – 1‑to‑1 expense contacts + groups
   ──────────────────────────────────────────────────────────────────────── */
export const getAllContacts = query({
  handler: async (ctx) => {
    const currentUser = await ctx.runQuery(internal.users.getCurrentUser);

    // Personal expenses where YOU are the payer
    const expensesYouPaid = await ctx.db
      .query("expenses")
      .withIndex("by_user_and_group", (q) =>
        q.eq("paidByUserId", currentUser._id).eq("groupId", undefined)
      )
      .collect();

    // Personal expenses where YOU are NOT the payer
    const expensesNotPaidByYou = (
      await ctx.db
        .query("expenses")
        .withIndex("by_group", (q) => q.eq("groupId", undefined))
        .collect()
    ).filter(
      (e) =>
        e.paidByUserId !== currentUser._id &&
        e.splits.some((s) => s.userId === currentUser._id)
    );

    const personalExpenses = [...expensesYouPaid, ...expensesNotPaidByYou];

    // Extract unique counterpart IDs
    const contactIds = new Set();
    personalExpenses.forEach((exp) => {
      if (exp.paidByUserId !== currentUser._id) {
        contactIds.add(exp.paidByUserId);
      }

      exp.splits.forEach((s) => {
        if (s.userId !== currentUser._id) {
          contactIds.add(s.userId);
        }
      });
    });

    // Fetch user documents
    const contactUsers = await Promise.all(
      [...contactIds].map(async (id) => {
        const u = await ctx.db.get(id);
        return u
          ? {
              id: u._id,
              name: u.name,
              email: u.email,
              imageUrl: u.imageUrl,
              type: "user",
            }
          : null;
      })
    );

    // Groups where current user is a member
    const userGroups = (await ctx.db.query("groups").collect())
      .filter((g) => g.members.some((m) => m.userId === currentUser._id))
      .map((g) => ({
        id: g._id,
        name: g.name,
        description: g.description,
        memberCount: g.members.length,
        type: "group",
      }));

    // Sort alphabetically (FIXED - proper null handling)
    const validContactUsers = contactUsers.filter(Boolean);
    validContactUsers.sort((a, b) => {
      const nameA = a?.name || "";
      const nameB = b?.name || "";
      return nameA.localeCompare(nameB);
    });
    
    userGroups.sort((a, b) => {
      const nameA = a.name || "";
      const nameB = b.name || "";
      return nameA.localeCompare(nameB);
    });

    return { users: validContactUsers, groups: userGroups };
  },
});

/* ──────────────────────────────────────────────────────────────────────────
   2. createGroup – create a new group
   ──────────────────────────────────────────────────────────────────────── */
export const createGroup = mutation({
  args: {
    name: v.string(),
    description: v.optional(v.string()),
    members: v.array(v.id("users")),
  },
  handler: async (ctx, args) => {
    const currentUser = await ctx.runQuery(internal.users.getCurrentUser);

    if (!args.name.trim()) throw new Error("Group name cannot be empty");

    const uniqueMembers = new Set(args.members);
    uniqueMembers.add(currentUser._id); // Ensure creator is included

    // Validate all members exist
    for (const id of uniqueMembers) {
      if (!(await ctx.db.get(id))) {
        throw new Error(`User with ID ${id} not found`);
      }
    }

    return await ctx.db.insert("groups", {
      name: args.name.trim(),
      description: args.description?.trim() ?? "",
      createdBy: currentUser._id,
      members: [...uniqueMembers].map((id) => ({
        userId: id,
        role: id === currentUser._id ? "admin" : "member",
        joinedAt: Date.now(),
      })),
    });
  },
});

export const deleteGroup = mutation({
  args: {
    groupId: v.id("groups"),
  },
  handler: async (ctx, args) => {
    const currentUser = await ctx.runQuery(internal.users.getCurrentUser);

    const group = await ctx.db.get(args.groupId);
    if (!group) {
      throw new Error("Group not found");
    }

    // Only admins can delete the group
    const isAdmin = group.members.some(
      (m) => m.userId === currentUser._id && m.role === "admin"
    );
    if (!isAdmin) {
      throw new Error("Only group admins can delete the group");
    }

    // Delete the group
    await ctx.db.delete(args.groupId);
     return { success: true };
  },
});