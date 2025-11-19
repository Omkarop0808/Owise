import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Page Not Found | Owise",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center bg-white text-center text-slate-900 relative ${inter.className}`}
    >
      {/* 404 Card */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 animate-fadeInUp border border-gray-100">
        <h1 className="text-6xl font-extrabold gradient-title mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-slate-600 mb-6">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-indigo-700 to-teal-500 text-white shadow-md hover:opacity-95"
        >
          <Link href="/">
            Go Back Home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
