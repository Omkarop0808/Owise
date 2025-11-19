"use client";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-users";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // adjust path if needed

function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo-owise.jpg"
            alt="Owise Logo"
            width={180}
            height={50}
            className="h-10 w-auto object-contain rounded-full"
            priority
          />
        </Link>

        {/* Page Links */}
        {path === "/" && (
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-gray-700 text-sm font-medium hover:text-green-700 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 text-sm font-medium hover:text-green-700 transition-colors"
            >
              How it Works
            </a>
          </div>
        )}

        {/* Auth Section */}
        <div className="flex items-center gap-4">
<SignedIn>
  {/* Mobile: icon-only dashboard button (visible on small screens only) */}
  <Link href="/dashboard" className="inline-flex md:hidden">
    <Button
      className="
        inline-flex items-center gap-2 text-sm font-medium
        bg-white text-gray-700 border border-gray-200
        px-4 py-2 rounded-lg transition-all duration-300
        hover:text-green-700 hover:bg-green-50
        hover:border-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400
        cursor-pointer
      "
    >
      <LayoutDashboard className="h-4 w-4 inline" />
    </Button>
  </Link>

  {/* Desktop/tablet: full Dashboard text button (hidden on small screens) */}
  <Link href="/dashboard" className="hidden md:inline-flex">
    <Button
      className="
        inline-flex items-center gap-2 text-sm font-medium
        bg-white text-gray-700 border border-gray-200
        px-4 py-2 rounded-lg transition-all duration-300
        hover:text-green-700 hover:bg-green-50
        hover:border-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400
        cursor-pointer
      "
    >
      <LayoutDashboard className="h-4 w-4 inline mr-1" />
      Dashboard
    </Button>
  </Link>

  <UserButton afterSignOutUrl="/" />
</SignedIn>


          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-gray-200 text-gray-800 hover:bg-green-100 hover:text-green-700 transition-colors rounded-md cursor-pointer">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button className="bg-green-700 text-white hover:bg-green-600 transition-colors rounded-md cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>

      {/* Loading Bar */}
      {isLoading && <BarLoader width="100%" color="#16a34a" />}
    </header>
  );
}

export default Header;
