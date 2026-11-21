
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ContactPage() {
  const reduceMotion = useReducedMotion();

  const contactItems = [
    {
      icon: Mail,
      label: "Write to us",
      value: "hello@forma.homes",
      href: "mailto:hello@forma.homes",
    },
    {
      icon: Phone,
      label: "Call our studio",
      value: "+351 210 000 000",
      href: "tel:+351210000000",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090D] text-[#F4F0E8]">
      {/* ==================================================
          AMBIENT BACKGROUND
      ================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Gold ambient glow */}
        <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#C6A56B]/[0.08] blur-[150px]" />

        <div className="absolute -right-[15%] top-[35%] h-[700px] w-[700px] rounded-full bg-[#E3C58B]/[0.05] blur-[170px]" />

        <div className="absolute bottom-[-20%] left-[35%] h-[500px] w-[500px] rounded-full bg-[#C6A56B]/[0.04] blur-[150px]" />

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(198,165,107,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(198,165,107,0.4) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#08090D_100%)]" />
      </div>

      {/* ==================================================
          HERO / MAIN CONTACT EXPERIENCE
      ================================================== */}

      <section className="relative z-10 mx-auto max-w-[1600px] px-5 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40 lg:px-16 lg:pb-36 lg:pt-44">
        {/* Top heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6A56B]/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E3C58B] shadow-[0_0_12px_rgba(227,197,139,0.8)]" />
            </span>

            <span className="text-[9px] tracking-[0.35em] uppercase text-[#C6A56B] sm:text-[10px]">
              FORMA private residences · Personal enquiries
            </span>
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.8rem)] font-light leading-[0.9] tracking-[-0.07em]">
              Let&apos;s find
              <br />
              your{" "}
              <span className="font-serif italic text-[#C6A56B] drop-shadow-[0_0_20px_rgba(198,165,107,0.15)]">
                next place.
              </span>
            </h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 lg:pb-3"
            >
              <div className="h-px w-10 bg-[#C6A56B]/60" />

              <p className="max-w-[240px] text-xs leading-6 text-white/40">
                Consider this the beginning of something worth finding.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ==================================================
            MAIN GRID
        ================================================== */}

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* LEFT SIDE — INFORMATION */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative lg:col-span-5"
          >
            {/* Glass info panel */}
            <div className="relative overflow-hidden rounded-2xl border border-[#C6A56B]/15 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
              {/* Top highlight */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#E3C58B]/60 to-transparent" />

              {/* Panel glow */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A56B]/[0.06] blur-[100px]" />

              <div className="relative">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
                  A personal connection
                </span>

                <h2 className="mt-7 text-3xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
                  What does
                  <br />
                  <span className="font-serif italic text-[#E3C58B]">
                    home feel like?
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                  A place to slow down. Somewhere that feels unmistakably yours.
                  Whatever stage of your journey you&apos;re in, our studio is
                  here to make the next step feel simple.
                </p>

                {/* Decorative divider */}
                <div className="my-9 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C6A56B]/40 to-transparent" />
                  <Sparkles
                    size={13}
                    className="text-[#C6A56B]/60"
                  />
                </div>

                {/* Contact details */}
                <div className="space-y-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-500 hover:border-[#C6A56B]/30 hover:bg-[#C6A56B]/[0.04]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#C6A56B]/20 bg-[#C6A56B]/[0.06] transition-all duration-500 group-hover:border-[#C6A56B]/50 group-hover:shadow-[0_0_20px_rgba(198,165,107,0.12)]">
                          <Icon
                            size={16}
                            className="text-[#C6A56B]"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <span className="block text-[8px] tracking-[0.2em] uppercase text-white/35">
                            {item.label}
                          </span>

                          <span className="mt-1 block truncate text-xs text-white/75 transition-colors group-hover:text-[#E3C58B] sm:text-sm">
                            {item.value}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C6A56B]"
                        />
                      </a>
                    );
                  })}
                </div>

                {/* Location */}
                <div className="mt-7 flex items-start gap-4 px-1">
                  <MapPin
                    size={15}
                    className="mt-1 shrink-0 text-[#C6A56B]"
                  />

                  <div>
                    <span className="text-[8px] tracking-[0.25em] uppercase text-white/35">
                      Places we call home
                    </span>

                    <p className="mt-2 text-xs leading-6 text-white/65">
                      Lisbon <span className="text-[#C6A56B]">·</span> Ibiza{" "}
                      <span className="text-[#C6A56B]">·</span> Comporta
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                BELOW PANEL — PERSONAL PROMISE
            ================================================== */}

            <div className="mt-6 flex items-start gap-4 px-2 sm:px-4">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C6A56B]/20 bg-[#C6A56B]/[0.05]">
                <Check size={13} className="text-[#C6A56B]" />
              </div>

              <div>
                <p className="text-xs text-white/75">
                  A conversation, not a commitment.
                </p>

                <p className="mt-2 max-w-sm text-[11px] leading-6 text-white/35">
                  No pressure. No noise. Just a genuine conversation with our
                  studio team.
                </p>
              </div>
            </div>

            {/* Small visual card */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="group relative mt-8 hidden overflow-hidden rounded-xl border border-white/[0.08] sm:block"
            >
              <div className="relative h-[220px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[8px] tracking-[0.25em] uppercase text-[#E3C58B]">
                    Our perspective
                  </span>

                  <p className="mt-2 max-w-xs font-serif text-xl italic text-white/90">
                    The right place changes more than your address.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — GLASS CONTACT FORM */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* ==================================================
            BOTTOM STRIP
        ================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:mt-28 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[8px] tracking-[0.25em] uppercase text-white/25">
            FORMA · A different way of finding home
          </span>

          <Link
            href="/residences"
            className="group flex w-fit items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/40 transition-colors hover:text-[#E3C58B]"
          >
            Explore our residences
            <MoveUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* ============================================================
   GLASSMORPHIC CONTACT FORM
============================================================ */

function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClass = (name: string) =>
    `mt-2.5 w-full rounded-xl border bg-white/[0.025] px-4 py-4 text-sm text-[#F4F0E8] outline-none transition-all duration-500 placeholder:text-white/20 ${
      focusedField === name
        ? "border-[#C6A56B]/60 bg-[#C6A56B]/[0.035] shadow-[0_0_25px_rgba(198,165,107,0.07),inset_0_0_15px_rgba(198,165,107,0.025)]"
        : "border-white/[0.08] hover:border-white/[0.16]"
    }`;

  const labelClass =
    "text-[9px] tracking-[0.2em] uppercase text-white/45";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group/form relative"
    >
      {/* ==================================================
          GLASS PANEL
      ================================================== */}

      <div className="absolute -inset-3 rounded-[28px] bg-[#C6A56B]/[0.035] blur-2xl transition-opacity duration-700 group-hover/form:bg-[#C6A56B]/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl border border-[#C6A56B]/20 bg-[#111219]/75 shadow-[0_20px_100px_rgba(0,0,0,0.35),0_0_40px_rgba(198,165,107,0.035)] backdrop-blur-2xl sm:rounded-3xl">
        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-[#C6A56B]/[0.025]" />

        {/* Top neon line */}
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#E3C58B]/80 to-transparent shadow-[0_0_15px_rgba(227,197,139,0.2)]" />

        {/* Inner ambient glow */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#C6A56B]/[0.055] blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-10 xl:p-12">
          {/* Form header */}
          <div className="mb-9 flex items-start justify-between gap-5 sm:mb-10">
            <div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
                Private enquiry
              </span>

              <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                Tell us what
                <br />
                <span className="font-serif italic text-[#E3C58B]">
                  you have in mind.
                </span>
              </h2>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C6A56B]/20 bg-[#C6A56B]/[0.05] sm:h-14 sm:w-14">
              <Mail
                size={18}
                className="text-[#C6A56B] sm:size-5"
              />
            </div>
          </div>

          {/* ==================================================
              FORM
          ================================================== */}

          <form
            className="space-y-5 sm:space-y-6"
            onSubmit={(event) => {
              event.preventDefault();

              const values = new FormData(event.currentTarget);

              const subject = encodeURIComponent(
                `FORMA enquiry — ${values.get("interest") || "General enquiry"}`,
              );

              const body = encodeURIComponent(
                `Name: ${values.get("name")}\n` +
                  `Email: ${values.get("email")}\n` +
                  `Interest: ${values.get("interest")}\n` +
                  `Preferred location: ${values.get("location") || "Not specified"}\n\n` +
                  `Message:\n${values.get("message") || "No additional message"}`,
              );

              window.location.href = `mailto:hello@forma.homes?subject=${subject}&body=${body}`;

              setSubmitted(true);
            }}
          >
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>
                  Your name <span className="text-[#C6A56B]">*</span>
                </span>

                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  className={inputClass("name")}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </label>

              <label className="block">
                <span className={labelClass}>
                  Email address <span className="text-[#C6A56B]">*</span>
                </span>

                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </label>
            </div>

            {/* Interest */}
            <label className="block">
              <span className={labelClass}>I&apos;m interested in</span>

              <select
                name="interest"
                defaultValue=""
                className={`${inputClass("interest")} appearance-none`}
                onFocus={() => setFocusedField("interest")}
                onBlur={() => setFocusedField(null)}
              >
                <option value="" disabled className="bg-[#111219]">
                  Choose what brings you here
                </option>

                <option value="Private residence" className="bg-[#111219]">
                  A private residence
                </option>

                <option value="Investment opportunity" className="bg-[#111219]">
                  An investment opportunity
                </option>

                <option value="Arrange a visit" className="bg-[#111219]">
                  Arrange a private visit
                </option>

                <option value="Partnership" className="bg-[#111219]">
                  A partnership
                </option>

                <option value="General enquiry" className="bg-[#111219]">
                  Something else
                </option>
              </select>
            </label>

            {/* Preferred location */}
            <label className="block">
              <span className={labelClass}>A place on your mind?</span>

              <select
                name="location"
                defaultValue=""
                className={`${inputClass("location")} appearance-none`}
                onFocus={() => setFocusedField("location")}
                onBlur={() => setFocusedField(null)}
              >
                <option value="" className="bg-[#111219]">
                  Any location
                </option>

                <option value="Lisbon" className="bg-[#111219]">
                  Lisbon
                </option>

                <option value="Ibiza" className="bg-[#111219}">
                  Ibiza
                </option>

                <option value="Comporta" className="bg-[#111219">
                  Comporta
                </option>

                <option value="Other" className="bg-[#111219">
                  Somewhere else
                </option>
              </select>
            </label>

            {/* Message */}
            <label className="block">
              <span className={labelClass}>Your note</span>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about what you are looking for..."
                className={`${inputClass("message")} min-h-[130px] resize-y`}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
            </label>

            {/* ==================================================
                SUBMIT BUTTON
            ================================================== */}

            <motion.button
              type="submit"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              className="group/button relative mt-2 flex w-full items-center justify-between overflow-hidden rounded-xl border border-[#C6A56B]/40 bg-[#C6A56B]/[0.07] px-5 py-5 transition-all duration-500 hover:border-[#E3C58B]/70 hover:bg-[#C6A56B]/[0.13] hover:shadow-[0_0_30px_rgba(198,165,107,0.12)] sm:px-7"
            >
              {/* Button hover fill */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#C6A56B]/[0.12] to-[#E3C58B]/[0.04] transition-transform duration-500 group-hover/button:scale-x-100" />

              <span className="relative z-10 text-[9px] tracking-[0.25em] uppercase text-[#E3C58B] transition-colors duration-300 group-hover/button:text-[#F4F0E8]">
                {submitted
                  ? "Open your email again"
                  : "Begin the conversation"}
              </span>

              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A56B]/30 bg-[#C6A56B]/[0.08] transition-all duration-500 group-hover/button:border-[#E3C58B] group-hover/button:bg-[#C6A56B] group-hover/button:text-[#08090D]">
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </span>
            </motion.button>

            {/* Confirmation */}
            <div
              aria-live="polite"
              className="min-h-5 text-center text-[10px] text-[#C6A56B]/70"
            >
              {submitted
                ? "Your email draft is ready. Send it from your email application to complete your enquiry."
                : ""}
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3 border-t border-white/[0.06] pt-5">
              <Check
                size={13}
                className="mt-0.5 shrink-0 text-[#C6A56B]/70"
              />

              <p className="text-[10px] leading-5 text-white/30">
                Your details are shared only with our studio team and used to
                respond to your enquiry.
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
