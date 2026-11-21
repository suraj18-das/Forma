"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["Studio", "/studio"],
  ["Residences", "/residences"],
  ["Projects", "/projects"],
  ["Journal", "/journal"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="route-header">
        <Link href="/" className="wordmark">
          FORMA<span>®</span>
        </Link>
        <span className="route-header-note">
          Homes shaped by light
          <br />A more human tomorrow
        </span>
        <nav className="route-desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="route-header-cta" href="/contact">
          Enquire <ArrowUpRight size={14} />
        </Link>
        <button
          className="route-menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && (
        <nav className="route-mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Enquire <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="route-footer">
      <div>
        <Link href="/" className="wordmark">
          FORMA<span>®</span>
        </Link>
        <p>Exceptional places for a brighter tomorrow.</p>
      </div>
      <div className="route-footer-links">
        {navItems.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
        <Link href="/contact">Contact</Link>
      </div>
      <small>© 2025 FORMA Developments · Designed to belong.</small>
    </footer>
  );
}
