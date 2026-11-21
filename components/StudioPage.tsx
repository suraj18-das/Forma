"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
  Plus,
  Minus,
  MoveDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

export function StudioPage() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      number: "01",
      title: "Listening",
      subtitle: "Before we build, we pay attention.",
      description:
        "Every place begins with attention. We walk the land before we imagine what might be built. We learn its light, its silence, its old paths, and the small details that deserve to stay.",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90",
      tag: "Landscape & context",
    },
    {
      number: "02",
      title: "Drawing",
      subtitle: "Ideas become something tangible.",
      description:
        "Architects, makers and landscape designers work together from the first sketch. Each decision is measured against one question: will this make life feel more connected?",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      tag: "Design & intention",
    },
    {
      number: "03",
      title: "Making",
      subtitle: "Care is found in the details.",
      description:
        "We work with local hands, honest materials and a long view. Progress is measured not only in milestones, but in the care taken at every threshold.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
      tag: "Craft & material",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Less, but better.",
      description:
        "We believe restraint is a form of generosity. Every space, material and line should have a reason to exist.",
    },
    {
      number: "02",
      title: "Rooted, never imposed.",
      description:
        "The best architecture does not compete with its surroundings. It learns from them, and belongs.",
    },
    {
      number: "03",
      title: "Made for real life.",
      description:
        "Beyond the photograph, a home should be somewhere life unfolds naturally, comfortably and beautifully.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#08090D] text-[#F4F0E8]">

        {/* Background image */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
            alt="Contemporary architecture surrounded by nature"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/90 via-[#08090D]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-[#08090D]/30" />

        {/* Ambient gold */}
        <div className="pointer-events-none absolute left-[15%] top-[35%] h-[400px] w-[400px] rounded-full bg-[#C6A56B]/10 blur-[150px]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-36 sm:px-10 lg:px-20 lg:pb-16 lg:pt-40">

          <div className="flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-px bg-[#C6A56B]"
            />

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-[10px] uppercase tracking-[0.35em] text-[#C6A56B]"
            >
              FORMA · Independent real estate studio
            </motion.span>
          </div>

          <div className="max-w-6xl py-20">

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.16,
                  },
                },
              }}
              className="text-[clamp(4rem,12vw,11rem)] font-light leading-[0.85] tracking-[-0.075em]"
            >
              {["A place is", "never just", "a place."].map((line, i) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 90,
                      filter: "blur(12px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block overflow-hidden"
                >
                  {i === 1 ? (
                    <span className="font-serif italic text-[#C6A56B]">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 max-w-md text-sm leading-7 text-white/60 sm:text-base"
            >
              We shape places around the way people want to live — and the
              landscapes they are lucky enough to live within.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-8"
            >
              <Link
                href="#studio-story"
                className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B]/10 group-hover:shadow-[0_0_25px_rgba(198,165,107,0.2)]">
                  <MoveDown
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-y-1"
                  />
                </span>

                <span className="text-white/60 transition-colors group-hover:text-[#C6A56B]">
                  Discover our philosophy
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom hero information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Est. 2024 · Portugal & Spain
            </span>

            <span className="text-xs text-white/50">
              Considered places. Meaningful lives.
            </span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section
        id="studio-story"
        className="relative overflow-hidden bg-[#F2F0EA] px-6 py-28 text-[#151515] sm:px-10 lg:px-20 lg:py-40"
      >
        <div className="absolute right-[-100px] top-20 h-[400px] w-[400px] rounded-full bg-[#C6A56B]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">

            {/* Left side */}
            <div className="lg:col-span-5">

              <ScrollReveal>
                <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                  <span className="h-px w-8 bg-[#C6A56B]" />
                  Our point of view
                </span>

                <h2 className="mt-8 text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.92] tracking-[-0.07em]">
                  Homes that
                  <br />
                  belong to
                  <br />
                  <em className="font-serif text-[#A78852]">
                    something
                    <br />
                    larger.
                  </em>
                </h2>
              </ScrollReveal>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="mt-10 h-px bg-[#C6A56B]/50"
              />

              <ScrollReveal delay={0.2}>
                <p className="mt-8 max-w-sm text-sm leading-8 text-[#68645C]">
                  FORMA is an independent real estate studio creating enduring
                  residences in places with a strong sense of self. Our work is
                  guided by restraint, rooted in local character and designed
                  for a more human tomorrow.
                </p>
              </ScrollReveal>
            </div>

            {/* Right image composition */}
            <div className="relative lg:col-span-7 lg:pt-24">

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="group relative h-[420px] overflow-hidden sm:h-[560px]">

                  <motion.img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90"
                    alt="Minimalist architecture and warm natural interiors"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1.2 }}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                      Our philosophy
                    </span>

                    <p className="mt-3 max-w-xs text-2xl font-light text-white sm:text-4xl">
                      Beauty is not
                      <br />
                      <em className="font-serif text-[#E3C58B]">
                        the whole story.
                      </em>
                    </p>
                  </div>
                </div>

                {/* Floating corner detail */}
                <div className="absolute -bottom-6 -left-4 hidden border border-[#C6A56B]/40 bg-[#F2F0EA] px-6 py-5 sm:block lg:-left-12">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-[#9D7D45]">
                    Our belief
                  </span>
                  <span className="mt-2 block font-serif text-xl italic">
                    Spaces should mean something.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDIO PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] px-6 py-28 text-[#F4F0E8] sm:px-10 lg:px-20 lg:py-36">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#C6A56B]/[0.07] blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#C6A56B]/[0.05] blur-[140px]" />

        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(198,165,107,1) 1px,transparent 1px),linear-gradient(90deg,rgba(198,165,107,1) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
                  <span className="h-px w-8 bg-[#C6A56B]" />
                  The way we work
                </span>

                <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.07em]">
                  Thoughtfully,
                  <br />
                  <em className="font-serif text-[#C6A56B]">
                    at every step.
                  </em>
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-7 text-white/45 lg:pb-3">
                Good things do not happen by accident. They happen when every
                decision has intention.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive chapter tabs */}
          <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">

            {/* Chapters */}
            <div className="lg:col-span-5">
              {chapters.map((chapter, index) => {
                const isActive = activeChapter === index;

                return (
                  <button
                    key={chapter.number}
                    onClick={() => setActiveChapter(index)}
                    className={`group relative block w-full border-t py-7 text-left transition-colors duration-500 ${
                      isActive
                        ? "border-[#C6A56B]/70"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">

                      <div className="flex gap-5 sm:gap-7">

                        <span
                          className={`text-xs transition-colors ${
                            isActive
                              ? "text-[#C6A56B]"
                              : "text-white/30 group-hover:text-white/60"
                          }`}
                        >
                          {chapter.number}
                        </span>

                        <div>
                          <h3
                            className={`text-3xl font-light tracking-[-0.04em] transition-colors duration-500 sm:text-4xl ${
                              isActive
                                ? "text-white"
                                : "text-white/55 group-hover:text-white"
                            }`}
                          >
                            {chapter.title}
                          </h3>

                          <p
                            className={`mt-3 text-xs transition-colors ${
                              isActive
                                ? "text-[#C6A56B]"
                                : "text-white/35"
                            }`}
                          >
                            {chapter.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? "border-[#C6A56B]/50 bg-[#C6A56B]/10 text-[#C6A56B]"
                            : "border-white/15 text-white/40 group-hover:border-white/40"
                        }`}
                      >
                        {isActive ? (
                          <Minus size={13} />
                        ) : (
                          <Plus size={13} />
                        )}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="ml-9 mt-6 max-w-md text-sm leading-8 text-white/55 sm:ml-14">
                            {chapter.description}
                          </p>

                          <span className="ml-9 mt-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-[#C6A56B] sm:ml-14">
                            {chapter.tag}
                            <ArrowUpRight size={14} />
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}

              <div className="border-t border-white/10" />
            </div>

            {/* Interactive image */}
            <div className="lg:col-span-7">
              <div className="sticky top-28">

                <div className="relative aspect-[4/5] max-h-[700px] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={chapters[activeChapter].image}
                      src={chapters[activeChapter].image}
                      alt={chapters[activeChapter].title}
                      initial={{
                        opacity: 0,
                        scale: 1.06,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.97,
                        filter: "blur(4px)",
                      }}
                      transition={{ duration: 0.65 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  {/* Image counter */}
                  <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                    <span className="text-xs text-[#C6A56B]">
                      {chapters[activeChapter].number}
                    </span>

                    <span className="h-px w-10 bg-white/30" />

                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                      {chapters[activeChapter].tag}
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                    <motion.h3
                      key={chapters[activeChapter].title}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl font-light tracking-[-0.05em] sm:text-6xl"
                    >
                      {chapters[activeChapter].title}
                    </motion.h3>

                    <div className="mt-6 flex items-center gap-2">
                      {chapters.map((chapter, index) => (
                        <button
                          key={chapter.number}
                          onClick={() => setActiveChapter(index)}
                          aria-label={`Show chapter ${chapter.number}`}
                          className={`h-[2px] transition-all duration-500 ${
                            activeChapter === index
                              ? "w-12 bg-[#C6A56B]"
                              : "w-5 bg-white/30 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-[9px] uppercase tracking-[0.25em] text-white/35">
                  <span>FORMA / Process</span>
                  <span>0{activeChapter + 1} — 03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURAL IMAGE MOSAIC
      ===================================================== */}

      <section className="overflow-hidden bg-[#F2F0EA] px-6 py-28 text-[#151515] sm:px-10 lg:px-20 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                  A closer look
                </span>

                <h2 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.07em]">
                  The beauty
                  <br />
                  <em className="font-serif text-[#A78852]">
                    of the details.
                  </em>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#777168]">
                The feeling of a place lives in the things that are easy to
                overlook. Light. Texture. A view that changes throughout the day.
              </p>
            </div>
          </ScrollReveal>

          {/* Mosaic */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

            {/* Large */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden lg:col-span-7"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.1 }}
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                  alt="Minimal architecture in natural light"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                  01 / Light
                </span>
                <p className="mt-2 text-2xl font-light text-white sm:text-3xl">
                  A study in natural light.
                </p>
              </div>
            </motion.div>

            {/* Right mosaic */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-5 lg:grid-rows-2 lg:gap-6">

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 1 }}
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                    alt="Warm natural material palette"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70" />

                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    02 / Material
                  </span>
                  <p className="mt-2 text-xl font-light text-white sm:text-2xl">
                    Honest by nature.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 1 }}
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"
                    alt="Landscape surrounding a residence"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70" />

                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    03 / Landscape
                  </span>
                  <p className="mt-2 text-xl font-light text-white sm:text-2xl">
                    Nothing without its place.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES / MANIFESTO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] px-6 py-28 text-[#F4F0E8] sm:px-10 lg:px-20 lg:py-36">

        {/* Background light */}
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["0%", "10%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A56B]/[0.06] blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl">

          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
              What guides us
            </span>

            <h2 className="mt-8 max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.92] tracking-[-0.075em]">
              Not more.
              <br />
              <em className="font-serif text-[#C6A56B]">More meaningful.</em>
            </h2>
          </ScrollReveal>

          <div className="mt-20 border-t border-white/10">

            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group grid grid-cols-1 gap-5 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.015] sm:grid-cols-12 sm:gap-6 sm:py-12"
              >
                <span className="text-xs text-[#C6A56B] sm:col-span-1">
                  {principle.number}
                </span>

                <h3 className="text-2xl font-light tracking-[-0.03em] transition-colors group-hover:text-[#C6A56B] sm:col-span-4 sm:text-3xl">
                  {principle.title}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-white/45 sm:col-span-6 sm:col-start-7">
                  {principle.description}
                </p>

                <ArrowUpRight
                  size={18}
                  className="hidden text-[#C6A56B]/0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C6A56B] sm:block"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#EAE6DD] px-6 py-28 text-[#151515] sm:px-10 lg:px-20 lg:py-40">

        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C6A56B]/15 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                  A considered way forward
                </span>

                <h2 className="mt-8 text-[clamp(3.8rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.075em]">
                  Somewhere
                  <br />
                  worth
                  <br />
                  <em className="font-serif text-[#A78852]">
                    belonging.
                  </em>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-8 max-w-sm text-sm leading-7 text-[#777168]">
                  Discover places shaped by thoughtful design, quiet beauty
                  and a deeper connection to the world around them.
                </p>

                <Link
                  href="/projects"
                  className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#151515] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-[#F4F0E8] transition-all duration-500 hover:bg-[#C6A56B] hover:text-[#08090D] hover:shadow-[0_0_35px_rgba(198,165,107,0.25)]"
                >
                  Explore our projects

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-black/10">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            </div>

            {/* CTA image */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90"
                  alt="Architecture designed around natural surroundings"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                      FORMA
                    </span>
                    <p className="mt-2 font-serif text-2xl italic text-white">
                      The art of belonging.
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-black">
                    <MoveUpRight size={16} />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}