
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  MoveUpRight,
} from "lucide-react";

export default function Header({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", number: "01" },
    { label: "Studio", href: "/studio", number: "02" },
    { label: "Residences", href: "/residences", number: "03" },
    { label: "Projects", href: "/projects", number: "04" },
    { label: "Journal", href: "/journal", number: "05" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // ============================================================
  // SCROLL STATE
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================================
  // MOBILE MENU CONTROL
  // ============================================================

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent page scrolling behind the full-screen menu.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // ============================================================
  // ANIMATION SETTINGS
  // ============================================================

  const easeLuxury = [0.22, 1, 0.36, 1] as const;

  const navVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeLuxury,
      },
    },
  };

  return (
    <>
      {/* ========================================================
          HEADER
      ======================================================== */}

      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: easeLuxury,
        }}
        className={`fixed left-0 right-0 top-0 z-[120] px-3 pt-3 transition-all duration-700 sm:px-6 sm:pt-5 lg:px-10 ${
          menuOpen ? "pointer-events-none" : ""
        }`}
      >
        <div
          className={`relative mx-auto flex max-w-[1600px] items-center justify-between overflow-hidden rounded-2xl transition-all duration-700 sm:rounded-[22px] ${
            scrolled
              ? "border border-[#C6A56B]/20 bg-[#08090D]/85 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
              : "border border-white/[0.07] bg-[#08090D]/30 backdrop-blur-xl"
          }`}
        >
          {/* Header ambient reflection */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C6A56B]/[0.035] via-transparent to-[#C6A56B]/[0.025]"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: scrolled ? 0.7 : 1,
                  }
            }
          />

          {/* Top gold reflection */}
          <div
            className={`absolute left-0 top-0 h-px w-full transition-all duration-700 ${
              scrolled
                ? "bg-gradient-to-r from-transparent via-[#C6A56B]/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-white/15 to-transparent"
            }`}
          />

          <div className="relative flex h-[68px] w-full items-center justify-between px-4 sm:h-[78px] sm:px-7 lg:px-9">
            {/* ==================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              aria-label="FORMA home"
              onClick={closeMenu}
              className="group relative flex shrink-0 items-center"
            >
              <div className="relative">
                <span
                  className={`text-[26px] font-light tracking-[0.24em] transition-colors duration-500 sm:text-[30px] ${
                    dark || scrolled
                      ? "text-[#F4F0E8]"
                      : "text-white"
                  }`}
                >
                  FORMA
                </span>

                <span className="absolute -right-3 top-0 text-[8px] text-[#C6A56B]">
                  ®
                </span>

                {/* Logo gold underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-[#C6A56B]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.6,
                    ease: easeLuxury,
                  }}
                />
              </div>
            </Link>

            {/* ==================================================
                TAGLINE
            ================================================== */}

            <div className="hidden min-w-[130px] xl:block">
              <span className="block text-[8px] tracking-[0.18em] uppercase text-white/35">
                Independent real estate studio
              </span>

              <span className="mt-1 block text-[10px] text-[#C6A56B]/70">
                Spaces for a life well considered.
              </span>
            </div>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center gap-1 lg:flex">
              {menuItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-3 py-3 xl:px-4 ${
                      active ? "text-[#E3C58B]" : "text-white/55"
                    }`}
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-lg bg-white/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Link label */}
                    <span className="relative z-10 text-[9px] tracking-[0.16em] uppercase transition-colors duration-300 text-white group-hover:text-[#E3C58B] xl:text-[10px]">
                      {item.label}
                    </span>

                    {/* Active / hover underline */}
                    <motion.span
                      className="absolute bottom-1 left-3 right-3 h-px origin-left bg-[#C6A56B]"
                      initial={false}
                      animate={{
                        scaleX: active ? 1 : 0,
                        opacity: active ? 1 : 0,
                      }}
              transition={{ duration: 0.35 }}
            />

                    <span
                      className={`absolute bottom-1 left-3 right-3 h-px origin-left bg-[#C6A56B] transition-transform duration-500 ${
                        active
                          ? "scale-x-0"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ==================================================
                CONTACT CTA
            ================================================== */}

            <Link
              href="/contact"
              className="group relative hidden items-center gap-3 overflow-hidden rounded-full border border-[#C6A56B]/35 bg-[#C6A56B]/[0.035] px-5 py-3 transition-all duration-500 hover:border-[#E3C58B]/70 hover:shadow-[0_0_25px_rgba(198,165,107,0.12)] xl:flex"
            >
              {/* Gold hover fill */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#C6A56B] transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative z-10 text-[9px] tracking-[0.2em] uppercase text-[#E3C58B] transition-colors duration-500 group-hover:text-[#08090D]">
                Let&apos;s talk
              </span>

              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#C6A56B]/30 transition-all duration-500 group-hover:border-[#08090D]/20 group-hover:bg-[#08090D]/10">
                <ArrowUpRight
                  size={13}
                  className="text-[#C6A56B] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#08090D]"
                />
              </span>
            </Link>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="forma-mobile-navigation"
              className={`group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all duration-500 lg:hidden ${
                menuOpen
                  ? "border-[#C6A56B]/50 bg-[#C6A56B]/10 text-[#E3C58B]"
                  : "border-white/10 bg-white/[0.035] text-white/70 hover:border-[#C6A56B]/40 hover:text-[#E3C58B]"
              }`}
            >
              <span className="absolute inset-0 bg-[#C6A56B]/[0.07] opacity-0 transition-opacity group-hover:opacity-100" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: menuOpen ? -90 : 90,
                          scale: 0.7,
                        }
                  }
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, rotate: menuOpen ? 90 : -90, scale: 0.7 }
                  }
                  transition={{ duration: 0.25 }}
                  className="relative z-10"
                >
                  {menuOpen ? <X size={19} /> : <Menu size={19} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Bottom edge */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-[#C6A56B]"
            initial={{ width: "0%" }}
            animate={{ width: scrolled ? "100%" : "0%" }}
            transition={{ duration: 0.7, ease: easeLuxury }}
          />
        </div>
      </motion.header>

      {/* ============================================================
          FULL SCREEN MOBILE NAVIGATION
      ============================================================ */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark background */}
            <motion.div
              className="fixed inset-0 z-[110] bg-[#08090D]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Ambient gold */}
              <div className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-[#C6A56B]/[0.07] blur-[150px]" />

              <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C6A56B]/[0.045] blur-[150px]" />

              {/* Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(198,165,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(198,165,107,0.5) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                }}
              />

              {/* Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#08090D_90%)]" />
            </motion.div>

            {/* ========================================================
                MENU CONTENT
            ======================================================== */}

            <motion.div
              id="forma-mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="FORMA navigation"
              className="fixed inset-0 z-[115] overflow-y-auto px-5 pb-8 pt-28 sm:px-10 sm:pt-36"
              initial={
                reduceMotion
                  ? false
                  : { clipPath: "inset(0 0 100% 0)" }
              }
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={
                reduceMotion
                  ? undefined
                  : { clipPath: "inset(0 0 100% 0)" }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: easeLuxury,
              }}
            >
              <div className="relative mx-auto flex min-h-[calc(100svh-9rem)] max-w-[900px] flex-col">
                {/* Menu heading */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-8 flex items-center justify-between"
                >
                  <span className="flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
                    <span className="h-px w-7 bg-[#C6A56B]" />
                    Explore FORMA
                  </span>

                  <span className="text-[9px] tracking-[0.2em] uppercase text-white/25">
                    Navigation · 2026
                  </span>
                </motion.div>

                {/* ==================================================
                    MENU LINKS
                ================================================== */}

                <motion.nav
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-1"
                >
                  {menuItems.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <motion.div
                        key={item.href}
                        variants={navItemVariants}
                        className="border-b border-white/[0.08]"
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="group relative flex items-center justify-between gap-4 py-5 sm:py-7"
                        >
                          {/* Active glow */}
                          <span className="absolute inset-0 bg-gradient-to-r from-[#C6A56B]/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                          {/* Number */}
                          <span
                            className={`relative z-10 w-10 shrink-0 text-[9px] tracking-[0.2em] transition-colors duration-500 ${
                              active
                                ? "text-[#C6A56B]"
                                : "text-white/25 group-hover:text-[#C6A56B]"
                            }`}
                          >
                            {item.number}
                          </span>

                          {/* Label */}
                          <span
                            className={`relative z-10 flex-1 text-[clamp(2rem,8vw,4.8rem)] font-light leading-none tracking-[-0.045em] transition-all duration-500 ${
                              active
                                ? "text-[#E3C58B]"
                                : "text-white/75 group-hover:translate-x-2 group-hover:text-white"
                            }`}
                          >
                            {item.label}
                          </span>

                          {/* Arrow */}
                          <motion.span
                            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${
                              active
                                ? "border-[#C6A56B]/50 bg-[#C6A56B]/[0.06] text-[#C6A56B]"
                                : "border-white/10 text-white/25 group-hover:border-[#C6A56B]/40 group-hover:bg-[#C6A56B]/[0.04] group-hover:text-[#C6A56B]"
                            }`}
                            whileHover={reduceMotion ? undefined : { rotate: 45 }}
                          >
                            <ArrowUpRight size={17} />
                          </motion.span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>

                {/* ==================================================
                    MENU FOOTER
                ================================================== */}

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.6 }}
                  className="mt-10 grid gap-8 border-t border-white/[0.08] pt-7 sm:grid-cols-2 sm:items-end"
                >
                  {/* Footer tagline */}
                  <div>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[#C6A56B]/70">
                      A different way of finding home
                    </span>

                    <p className="mt-3 font-serif text-xl italic text-white/55 sm:text-2xl">
                      Spaces for a life well considered.
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="sm:text-right">
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="group inline-flex items-center gap-4 border border-[#C6A56B]/35 bg-[#C6A56B]/[0.04] px-6 py-4 transition-all duration-500 hover:border-[#C6A56B]/70 hover:bg-[#C6A56B]/[0.1]"
                    >
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#E3C58B]">
                        Start a conversation
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>

                {/* Bottom footer */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                  className="mt-8 flex items-center justify-between"
                >
                  <span className="text-[8px] tracking-[0.2em] uppercase text-white/20">
                    Lisbon · Ibiza · Comporta
                  </span>

                  <span className="text-[8px] tracking-[0.2em] uppercase text-white/20">
                    FORMA ®
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
