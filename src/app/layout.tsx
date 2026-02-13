import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/eternal-princess/nav/Navbar";

export const metadata: Metadata = {
  title: "Eternal Princess",
  description: "A soft place to breathe, become, and belong.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0f1a] text-white">
        {/* Ambient glows (global) */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-48 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-pink-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navbar />

          {/* Mobile-first container spacing */}
          <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
            {children}
          </div>

          {/* Simple footer placeholder */}
          <footer className="mx-auto max-w-6xl px-4 pb-10 pt-8 text-xs text-white/50 md:px-6">
            © {new Date().getFullYear()} Eternal Princess • soft sanctuary
          </footer>
        </div>
      </body>
    </html>
  );
}
