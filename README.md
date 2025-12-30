# 💸 Owise – Smart Expense Sharing App

> **Split expenses intelligently. Settle faster. Stay synced in real time.**

Owise is a modern, real time expense sharing application inspired by Splitwise. It helps groups manage shared expenses with clarity through flexible bill splitting, instant synchronization, and automated reporting. The focus is on simplicity, correctness, and zero manual overhead.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react)
![Convex](https://img.shields.io/badge/Convex-black?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-purple?style=for-the-badge)
![Inngest](https://img.shields.io/badge/Inngest-black?style=for-the-badge)

---

## ✨ Features

<img width="518" height="423" alt="Owise Overview" src="https://github.com/user-attachments/assets/81215add-df87-402e-a457-b83e657e3f20" />

### 👥 Group Expense Management
- Create groups and add members
- Track shared expenses transparently
- Clear balance calculations for every member

### 💱 Smart Bill Splitting
- Equal split
- Percentage based split
- Exact amount split
- Accurate multi member settlements

### ⚡ Real Time Sync
- Instant updates for all users
- Live balance recalculation
- Real time settlements and activity tracking using Convex

### 🔐 Secure Authentication
- Clerk based authentication
- Social login and email login
- Secure sessions and JWT validation

### 📊 Dashboard Overview
- Total group expenses
- Who owes whom
- Pending settlements
- Recent activity timeline

### 📧 Automated Email Reports
- Daily, weekly, or monthly summaries
- Group wise expense breakdown
- Amount owed and owed to you
- Powered by Inngest background jobs

### 🎨 Clean Responsive UI
- Built with Tailwind CSS and ShadCN
- Optimized for mobile and desktop
- Simple and distraction free design

---

## 📸 Screenshots

<img width="1526" height="854" alt="Dashboard" src="https://github.com/user-attachments/assets/26b1dfc2-a680-4666-8b2e-bd93c189a5d3" />
<img width="832" height="790" alt="Group View" src="https://github.com/user-attachments/assets/0465b968-a9d7-4304-be05-d3c40bbf44c2" />

---

## 🚀 Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS
- ShadCN UI

### Backend
- Convex (database + serverless functions)
- Real time queries, mutations, and actions

### Authentication
- Clerk (OAuth, email login, JWT validation)

### Automation
- Inngest (scheduled workflows and background jobs)
- Resend (email delivery)

---
owise/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── convex/              # Convex schema and functions
├── emails/              # Email templates
├── lib/                 # Utilities and helpers
├── hooks/               # Custom hooks
└── public/              # Static assets

🔄 Automation Details
Background Jobs

Scheduled email summaries

Automated report generation

Reliable execution with retries via Inngest

Email Reports

Expense summaries

Group wise breakdowns

Settlement status updates

🚀 Deployment

Recommended deployment using Vercel with Convex hosting.

Steps:

Connect GitHub repository to Vercel

Configure environment variables

Deploy on push to main branch

🙏 Acknowledgments

Convex for real time backend

Clerk for authentication

Inngest for background workflows

Resend for email delivery

<div align="center"> <strong>Built to make shared expenses painless</strong> <br /> <sub>Owise – smarter expense sharing</sub> </div> ```


### 🔧 Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=

CONVEX_DEPLOYMENT=
CONVEX_DEPLOY_KEY=
NEXT_PUBLIC_CONVEX_URL=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

RESEND_API_KEY=
GEMINI_API_KEY=
