"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Garden", href: "/garden" },
      { label: "Journey", href: "/journey" },
      { label: "About", href: "/about" },
    ],
    []
  );

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Subtle “glass” bar */}
      <div className="border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Brand */}
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 shadow-sm">
              ✨
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white">
                Eternal Princess
              </div>
              <div className="text-xs text-white/60">a safe sanctuary</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm transition",
                    active
                      ? "bg-white/10 text-white border border-white/15"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/garden"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 active:bg-white/80"
            >
              Enter 🌸
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10 transition"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={cx(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mx-auto max-w-6xl px-4 pb-4 md:px-6">
            <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className={cx("text-white/40", active && "text-white/70")}>
                      →
                    </span>
                  </Link>
                );
              })}

              <Link
                href="/garden"
                className="mt-2 flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90 active:bg-white/80"
              >
                Enter the Garden 🌸
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
