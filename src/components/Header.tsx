"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Leaf, Search, Menu, X, CalendarDays } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/pruvodce", label: "Průvodce výběrem", icon: Leaf },
  { href: "/rostliny", label: "Katalog rostlin", icon: Search },
  { href: "/sezonni-pruvodce", label: "Sezónní průvodce", icon: CalendarDays },
  { href: "/oblibene", label: "Oblíbené", icon: Heart },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Ta Pravá"
            width={165}
            height={70}
            className="h-10 w-auto md:h-12"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent-light text-primary-dark"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium ${
                  active ? "bg-accent-light text-primary-dark" : "text-gray-700"
                }`}
              >
                <link.icon size={20} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
