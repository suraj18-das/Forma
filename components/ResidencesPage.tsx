
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MoveDown,
  MapPin,
  BedDouble,
  Maximize2,
} from "lucide-react";
import { residences } from "@/lib/forma-data";

export function ResidencesPage() {
  const [activeResidence, setActiveResidence] = useState(0);

  const featuredHome = residences[activeResidence];

  return (
    <>
      {/* ==================================================
          01. CINEMATIC HERO
      ================================================== */}

      <section className="relative min-h-[95svh] overflow-hidden bg-[#08090D] text-[#F4F0E8]">

        {/* Background */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90"
            alt="Luxury architectural residence surrounded by natural landscape"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/90 via-[#08090D]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-[#08090D]/20" />

        {/* Ambient gold */}
        <div className="absolute left-[15%] top-[30%] h-[450px] w-[450px] rounded-full bg-[#C6A56B]/10 blur-[150px]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[95svh] flex-col justify-between px-6 pb-8 pt-36 sm:px-10 sm:pb-12 lg:px-20 lg:pt-40">

          <div className="flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 38 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-[#C6A56B]"
            />

            <motion.span
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-[9px] uppercase tracking-[0.35em] text-[#C6A56B] sm:text-[10px]"
            >
              The collection · {residences.length} residences
            </motion.span>
          </div>

          {/* Heading */}
          <div className="max-w-6xl py-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="text-[clamp(4rem,12vw,11rem)] font-light leading-[0.84] tracking-[-0.075em]"
            >
              {["Find your", "somewhere."].map((line, index) => (
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
                  className="block"
                >
                  {index === 1 ? (
                    <em className="font-serif text-[#C6A56B]">{line}</em>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 max-w-md text-sm leading-7 text-white/60 sm:mt-10 sm:text-base"
            >
              A small collection of homes, each with a distinct relationship
              to its place. Created to feel less like a destination and more
              like you have always belonged.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-8"
            >
              <Link
                href="#collection"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B]/10 group-hover:shadow-[0_0_25px_rgba(198,165,107,0.2)]">
                  <MoveDown
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-y-1"
                  />
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 transition-colors group-hover:text-[#C6A56B]">
                  Explore the collection
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Hero footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 sm:text-[10px]">
              Portugal · Spain · Mediterranean
            </span>

            <span className="text-xs text-white/45">
              Places with a point of view.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          02. COLLECTION INTRO
      ================================================== */}

      <section
        id="collection"
        className="relative overflow-hidden bg-[#F2F0EA] px-6 py-24 text-[#151515] sm:px-10 sm:py-32 lg:px-20 lg:py-40"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C6A56B]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">

            {/* Intro heading */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                  <span className="h-px w-8 bg-[#C6A56B]" />
                  Places with a point of view
                </span>

                <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.07em]">
                  Designed for
                  <br />
                  the life
                  <br />
                  <em className="font-serif text-[#A78852]">around them.</em>
                </h2>
              </motion.div>
            </div>

            {/* Intro copy */}
            <div className="lg:col-span-4 lg:col-start-9">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="max-w-md text-sm leading-8 text-[#716D65]"
              >
                Discover residences shaped by their surroundings. From island
                light to the gentle pace of the Portuguese coast, each home is
                an invitation to live more closely with the world outside.
              </motion.p>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A56B]/40">
                  <span className="font-serif text-xl text-[#A78852]">
                    0{residences.length}
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.25em] text-[#9D7D45]">
                    Carefully considered
                  </span>
                  <span className="mt-1 block text-sm text-[#716D65]">
                    Not more. Just right.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03. FEATURED RESIDENCE — INTERACTIVE
      ================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] px-6 py-24 text-[#F4F0E8] sm:px-10 sm:py-32 lg:px-20 lg:py-36">

        {/* Gold glow */}
        <div className="pointer-events-none absolute left-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#C6A56B]/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
                A closer introduction
              </span>

              <h2 className="mt-6 text-4xl font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Meet the <em className="font-serif text-[#C6A56B]">residences.</em>
              </h2>
            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Select a home to explore
            </span>
          </div>

          {/* Residence selectors */}
          <div className="mb-8 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
            {residences.map((home, index) => (
              <button
                key={home.slug}
                onClick={() => setActiveResidence(index)}
                className={`group relative border-b border-white/10 py-5 text-left transition-all duration-500 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 ${
                  activeResidence === index
                    ? "text-[#C6A56B]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em]">
                      Residence 0{index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-light tracking-[-0.03em] sm:text-2xl">
                      {home.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`transition-all duration-500 ${
                      activeResidence === index
                        ? "translate-x-0 text-[#C6A56B]"
                        : "-translate-x-1 translate-y-1 opacity-40 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
                  />
                </div>

                {/* Selection line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#C6A56B]"
                  initial={false}
                  animate={{
                    width: activeResidence === index ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </button>
            ))}
          </div>

          {/* Featured property */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredHome.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55 }}
              className="grid grid-cols-1 overflow-hidden border border-white/10 lg:grid-cols-12"
            >
              {/* Image */}
              <div className="group relative min-h-[380px] overflow-hidden sm:min-h-[550px] lg:col-span-8 lg:min-h-[680px]">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featuredHome.cover}
                    alt={`${featuredHome.name} in ${featuredHome.location}`}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                </motion.div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                {/* Status */}
                <span className="absolute left-5 top-5 border border-white/30 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-md sm:left-8 sm:top-8">
                  {featuredHome.status}
                </span>

                {/* Image bottom caption */}
                <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between sm:bottom-10 sm:left-8 sm:right-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                      FORMA collection
                    </span>

                    <p className="mt-2 font-serif text-xl italic text-white sm:text-3xl">
                      A place to feel elsewhere.
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D] sm:h-12 sm:w-12">
                    <Maximize2 size={15} />
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="relative flex flex-col justify-between bg-[#111219] p-7 sm:p-10 lg:col-span-4 lg:p-12">

                <div>
                  <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#C6A56B]">
                    <MapPin size={12} />
                    {featuredHome.location}
                  </span>

                  <h3 className="mt-6 text-4xl font-light leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    {featuredHome.name}
                  </h3>

                  <p className="mt-5 text-xs text-white/40">
                    {featuredHome.type}
                  </p>

                  <div className="mt-10 border-y border-white/10 py-6">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                      Asking price
                    </span>

                    <p className="mt-3 font-serif text-3xl text-[#C6A56B] sm:text-4xl">
                      {featuredHome.price}
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="max-w-sm text-sm leading-7 text-white/50">
                    A residence defined by its setting, its character and
                    the feeling of being exactly where you should be.
                  </p>

                  <Link
                    href={`/residences/${featuredHome.slug}`}
                    className="group mt-8 flex items-center justify-between border border-white/15 px-5 py-4 transition-all duration-500 hover:border-[#C6A56B]/60 hover:bg-[#C6A56B]/[0.06]"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-[#C6A56B]">
                      Discover this residence
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A56B] text-[#08090D] transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>

                {/* Bottom index */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Collection / 2026
                  </span>

                  <span className="text-xs text-[#C6A56B]">
                    0{activeResidence + 1} / 0{residences.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==================================================
          04. FULL-BLEED LIFESTYLE MOMENT
      ================================================== */}

      <section className="relative min-h-[75svh] overflow-hidden bg-[#08090D]">

        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90"
            alt="A peaceful landscape and natural environment"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />

        <div className="relative z-10 flex min-h-[75svh] items-end px-6 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-36">

          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#E3C58B]">
                Beyond the walls
              </span>

              <h2 className="mt-7 max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.88] tracking-[-0.075em] text-white">
                A different
                <br />
                <em className="font-serif text-[#E3C58B]">
                  kind of living.
                </em>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/60">
                The luxury of space. The beauty of time. The freedom to
                experience the everyday a little differently.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating vertical label */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block lg:right-12">
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
            The FORMA way of living
          </span>
        </div>
      </section>

      {/* ==================================================
          05. COLLECTION DETAILS
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F2F0EA] px-6 py-24 text-[#151515] sm:px-10 sm:py-32 lg:px-20 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                Every home, its own story
              </span>

              <h2 className="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.07em]">
                The complete
                <br />
                <em className="font-serif text-[#A78852]">collection.</em>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-md text-sm leading-8 text-[#716D65] md:justify-self-end"
            >
              Three distinct settings. Three different ways to experience
              architecture, landscape and life. Find the one that speaks
              to you.
            </motion.p>
          </div>

          {/* Property grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {residences.map((home, index) => (
              <motion.div
                key={home.slug}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                onMouseEnter={() => setActiveResidence(index)}
                className={`group relative ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <Link
                  href={`/residences/${home.slug}`}
                  className="block"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index === 0
                        ? "aspect-[16/9] sm:aspect-[2/1]"
                        : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={home.cover}
                      alt={`${home.name} in ${home.location}`}
                      fill
                      unoptimized
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/10 transition-opacity duration-500 group-hover:from-black/55" />

                    {/* Status */}
                    <span className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                      {home.status}
                    </span>

                    {/* Gold hover light */}
                    <div className="pointer-events-none absolute inset-0 bg-[#C6A56B]/0 transition-colors duration-700 group-hover:bg-[#C6A56B]/[0.04]" />

                    {/* Arrow */}
                    <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D] sm:right-7 sm:top-7">
                      <ArrowUpRight size={15} />
                    </span>

                    {/* Image text */}
                    <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                        0{index + 1} / {home.location}
                      </span>

                      <h3
                        className={`mt-3 font-light tracking-[-0.05em] text-white ${
                          index === 0
                            ? "text-4xl sm:text-6xl lg:text-7xl"
                            : "text-3xl sm:text-4xl"
                        }`}
                      >
                        {home.name}
                      </h3>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs text-white/65">
                          {home.type}
                        </span>

                        <span className="font-serif text-xl text-[#E3C58B] sm:text-2xl">
                          {home.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Under image */}
                  <div className="flex items-center justify-between border-b border-[#151515]/15 py-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#777168]">
                      Discover residence
                    </span>

                    <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#9D7D45] transition-all duration-300 group-hover:gap-4">
                      Explore
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          06. FINAL CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] px-6 py-28 text-[#F4F0E8] sm:px-10 sm:py-36 lg:px-20 lg:py-44">

        {/* Ambient gold */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A56B]/[0.07] blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C6A56B]">
              Your next chapter
            </span>

            <h2 className="mt-9 text-[clamp(3.5rem,10vw,10rem)] font-light leading-[0.88] tracking-[-0.075em]">
              Somewhere
              <br />
              <em className="font-serif text-[#C6A56B]">
                to call your own.
              </em>
            </h2>

            <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/45">
              Sometimes finding a home is not about searching for more.
              It is about recognising the place that feels right.
            </p>

            <Link
              href="/contact"
              className="group mx-auto mt-10 inline-flex items-center gap-5 rounded-full border border-[#C6A56B]/40 px-7 py-4 text-[9px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-[#C6A56B] hover:bg-[#C6A56B] hover:text-[#08090D] hover:shadow-[0_0_35px_rgba(198,165,107,0.2)] sm:text-[10px]"
            >
              Find your residence

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A56B] text-[#08090D] transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
