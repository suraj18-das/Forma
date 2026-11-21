
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MoveUpRight,
  Globe,
} from "lucide-react";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Studio", href: "/studio" },
    { label: "Residences", href: "/residences" },
    { label: "Projects", href: "/projects" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  const locations = ["Lisbon", "Ibiza", "Comporta"];

  const easeLuxury = [0.22, 1, 0.36, 1] as const;

  return (
    <footer
      id="forma-footer"
      className="relative isolate overflow-hidden bg-[#08090D] text-[#F4F0E8]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main gold atmosphere */}
        <motion.div
          className="absolute -bottom-[250px] left-[35%] h-[650px] w-[650px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,165,107,0.12) 0%, rgba(198,165,107,0.035) 40%, transparent 72%)",
            filter: "blur(90px)",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  x: [0, 35, -20, 0],
                  opacity: [0.55, 0.85, 0.5],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top-right glow */}
        <motion.div
          className="absolute -right-[150px] -top-[150px] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,165,107,0.08), transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198,165,107,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198,165,107,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Moving light */}
        {!reduceMotion && (
          <motion.div
            className="absolute left-0 top-[24%] h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(198,165,107,0.2) 50%, transparent 95%)",
            }}
            animate={{
              scaleX: [0.3, 1, 0.3],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,9,13,0.5)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* =========================================================
            TOP BRAND / CTA SECTION
        ========================================================= */}

        <section className="relative border-b border-white/[0.08] py-20 sm:py-28 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            {/* Brand */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: easeLuxury }}
            >
              {/* Brand eyebrow */}
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-8 bg-[#C6A56B]" />

                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]/80">
                  A different way of finding home
                </span>
              </div>

              {/* Logo */}
              <Link
                href="/"
                aria-label="FORMA home"
                className="group relative inline-block"
              >
                <span className="relative text-[clamp(4.5rem,15vw,12rem)] font-light leading-[0.8] tracking-[-0.1em] text-[#F4F0E8] transition-all duration-700 group-hover:text-[#E3C58B]">
                  FORMA
                </span>

                <span className="absolute -right-5 top-1 text-xs text-[#C6A56B] sm:-right-8 sm:text-lg">
                  ®
                </span>

                {/* Logo reflection */}
                <motion.span
                  className="absolute -bottom-5 left-0 h-px bg-gradient-to-r from-[#C6A56B] via-[#C6A56B]/30 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3 }}
                />
              </Link>

              {/* Brand statement */}
              <p className="mt-10 max-w-md text-sm leading-8 text-white/40 sm:text-base sm:leading-9">
                Spaces with intention.
                <br />
                Places with a pulse.
                <br />
                Homes that feel like you.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: easeLuxury,
              }}
              className="flex flex-col lg:items-end"
            >
              <div className="max-w-lg lg:text-right">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
                  Your next chapter
                </span>

                <h2 className="mt-5 text-4xl font-light leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Somewhere
                  <br />
                  <span className="font-serif italic text-[#C6A56B]">
                    worth finding.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/40 lg:ml-auto">
                  A place to return to. A place to become. Let&apos;s find yours.
                </p>
              </div>

              {/* Premium CTA */}
              <Link
                href="/contact"
                className="group relative mt-10 inline-flex w-full max-w-[340px] items-center justify-between overflow-hidden border border-[#C6A56B]/30 bg-[#C6A56B]/[0.035] px-5 py-4 transition-all duration-500 hover:border-[#C6A56B]/70 hover:shadow-[0_0_40px_rgba(198,165,107,0.12)] lg:mt-12"
              >
                {/* Animated gold fill */}
                <motion.span
                  className="absolute inset-0 origin-left bg-[#C6A56B]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: easeLuxury }}
                />

                <span className="relative z-10 text-[9px] tracking-[0.25em] uppercase text-[#E3C58B] transition-colors duration-500 group-hover:text-[#08090D] sm:text-[10px]">
                  Start a conversation
                </span>

                <motion.span
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A56B] text-[#08090D]"
                  whileHover={reduceMotion ? undefined : { rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={17} />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Decorative corner marks */}
          <div className="pointer-events-none absolute left-0 top-8 h-5 w-5 border-l border-t border-[#C6A56B]/20 sm:top-12" />
          <div className="pointer-events-none absolute bottom-8 right-0 h-5 w-5 border-b border-r border-[#C6A56B]/20 sm:bottom-12" />
        </section>

        {/* =========================================================
            NAVIGATION / INFORMATION
        ========================================================= */}

        <section className="grid grid-cols-2 gap-x-8 gap-y-14 py-16 sm:grid-cols-2 sm:gap-x-12 sm:py-20 lg:grid-cols-4 lg:gap-12">
          {/* Navigation */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-2 sm:col-span-1"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#C6A56B]" />

              <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">
                Explore
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              {footerLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-3 py-2"
                >
                  <span className="w-5 text-[8px] tracking-widest text-[#C6A56B]/30 transition-colors duration-300 group-hover:text-[#C6A56B]">
                    0{index + 1}
                  </span>

                  <span className="relative text-sm font-light text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E3C58B]">
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="text-[#C6A56B]/0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C6A56B]"
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#C6A56B]" />

              <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">
                Get in touch
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hello@forma.homes"
                className="group relative w-fit break-all text-sm text-white/50 transition-colors duration-300 hover:text-[#E3C58B]"
              >
                hello@forma.homes

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C6A56B] transition-all duration-500 group-hover:w-full" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-2 text-sm text-white/40 transition-colors hover:text-[#E3C58B]"
              >
                Tell us what you&apos;re looking for

                <ArrowRight
                  size={13}
                  className="text-[#C6A56B] transition-transform group-hover:translate-x-1"
                />
              </Link>

              <div className="mt-3 flex items-center gap-3">
                {/* <motion.a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#C6A56B]/40 hover:bg-[#C6A56B]/[0.06] hover:text-[#C6A56B]"
                >
                  <Instagram size={15} />
                </motion.a> */}

                <motion.a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#C6A56B]/40 hover:bg-[#C6A56B]/[0.06] hover:text-[#C6A56B]"
                >
                  <Globe size={15} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#C6A56B]" />

              <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">
                Our places
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {locations.map((location, index) => (
                <motion.div
                  key={location}
                  className="group flex items-center gap-3"
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                >
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <motion.span
                      className="absolute h-full w-full rounded-full bg-[#C6A56B]/30"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: [1, 2.5, 1],
                              opacity: [0.7, 0, 0.7],
                            }
                      }
                      transition={{
                        duration: 3,
                        delay: index * 0.7,
                        repeat: Infinity,
                      }}
                    />

                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#C6A56B]" />
                  </span>

                  <span className="text-sm font-light text-white/45 transition-colors duration-300 group-hover:text-[#E3C58B]">
                    {location}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#C6A56B]" />

              <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">
                The FORMA way
              </span>
            </div>

            <p className="font-serif text-xl leading-9 text-white/45 sm:text-2xl">
              Less ordinary.
              <br />
              <span className="italic text-[#C6A56B]/80">
                More considered.
              </span>
              <br />
              Always human.
            </p>
          </motion.div>
        </section>

        {/* =========================================================
            BRAND MANIFESTO STRIP
        ========================================================= */}

        <section className="relative overflow-hidden border-y border-white/[0.07] py-8 sm:py-10">
          <motion.div
            className="flex w-max items-center"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center gap-8 pr-8 sm:gap-14 sm:pr-14"
              >
                <span className="whitespace-nowrap text-[10px] tracking-[0.35em] uppercase text-white/20 sm:text-xs">
                  Designed to belong
                </span>

                <span className="text-lg text-[#C6A56B]/60">✳</span>

                <span className="whitespace-nowrap font-serif text-xl italic text-white/35 sm:text-2xl">
                  Homes shaped by light
                </span>

                <span className="text-lg text-[#C6A56B]/60">✳</span>

                <span className="whitespace-nowrap text-[10px] tracking-[0.35em] uppercase text-white/20 sm:text-xs">
                  Spaces for a life well considered
                </span>

                <span className="text-lg text-[#C6A56B]/60">✳</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* =========================================================
            BOTTOM FOOTER
        ========================================================= */}

        <section className="relative flex flex-col gap-7 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <span className="text-[9px] tracking-[0.15em] text-white/25">
              © {new Date().getFullYear()} FORMA DEVELOPMENTS
            </span>

            <span className="text-[8px] tracking-[0.2em] uppercase text-white/20">
              Designed to belong.
            </span>
          </div>

          {/* Agency credits */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 lg:justify-center">
            <span className="text-[8px] tracking-[0.2em] uppercase text-white/20">
              Digital partners
            </span>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              {/* IT's Solution */}
              <a
                href="https://itssolution.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[9px] tracking-[0.08em] text-white/35 transition-colors duration-300 hover:text-[#E3C58B]"
              >
                <span className="text-white/20 transition-colors group-hover:text-[#C6A56B]">
                  Designed & Developed by
                </span>

                <span className="font-medium text-white/50 transition-colors group-hover:text-[#E3C58B]">
                  IT&apos;s Solution
                </span>

                <ArrowUpRight
                  size={10}
                  className="text-[#C6A56B]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C6A56B]"
                />
              </a>

              {/* Divider */}
              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              {/* Boost Up Digital */}
              <a
                href="https://www.boostupdigital.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[9px] tracking-[0.08em] text-white/35 transition-colors duration-300 hover:text-[#E3C58B]"
              >
                <span className="text-white/20">
                  In collaboration with
                </span>

                <span className="font-medium text-white/50 transition-colors group-hover:text-[#E3C58B]">
                  Boost Up Digital
                </span>

                <ArrowUpRight
                  size={10}
                  className="text-[#C6A56B]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C6A56B]"
                />
              </a>
            </div>
          </div>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            className="group flex w-fit items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/35 transition-colors hover:text-[#E3C58B]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#C6A56B]/40 group-hover:bg-[#C6A56B]/[0.05]">
              <MoveUpRight
                size={13}
                className="text-[#C6A56B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </motion.button>
        </section>

        {/* =========================================================
            FINAL GOLD LINE
        ========================================================= */}

        <motion.div
          className="h-px origin-left bg-gradient-to-r from-[#C6A56B]/50 via-[#C6A56B]/15 to-transparent"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: easeLuxury,
          }}
        />
      </div>
    </footer>
);
}
