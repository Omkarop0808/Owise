import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner"
import {
  ClerkProvider,

} from '@clerk/nextjs'

const inter = Inter({subsets: ["latin"]});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Owise - Track. Split. Settle. Together",
  description: "Simplify Money Between Friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased`}
      >
        <ClerkProvider>
        <ConvexClientProvider>

        <Header/>
        <main className="min-h-screen"> {children}
            <Toaster richColors/>
        </main>
       
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
