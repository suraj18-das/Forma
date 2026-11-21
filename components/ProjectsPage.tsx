
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MoveDown,
  Plus,
  Check,
} from "lucide-react";
import { projects } from "@/lib/forma-data";

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  const featuredProject = projects[activeProject];

  const process = [
    {
      number: "01",
      title: "Listen",
      subtitle: "Understand before we begin.",
      description:
        "Every project starts with a sense of place. We study the land, its history, its rhythm, its people and the things that make it impossible to replicate elsewhere.",
    },
    {
      number: "02",
      title: "Imagine",
      subtitle: "Give possibility a form.",
      description:
        "We bring together architecture, landscape and intention. Ideas become drawings, conversations become decisions, and a vision starts to feel tangible.",
    },
    {
      number: "03",
      title: "Make",
      subtitle: "Turn intention into reality.",
      description:
        "A place is made by many hands. We collaborate with craftspeople, builders and makers to bring the details to life with care, patience and purpose.",
    },
    {
      number: "04",
      title: "Belong",
      subtitle: "Let the place become someone's story.",
      description:
        "The work is never truly finished when the doors open. A home becomes meaningful through the lives that unfold within it, the moments it holds and the memories it gathers.",
    },
  ];

  return (
    <>
      {/* ==================================================
          01 — PROJECT HERO
      ================================================== */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#08090D] text-[#F4F0E8]">

        {/* Hero image */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90"
            alt="Architectural project surrounded by a natural landscape"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/90 via-[#08090D]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-[#08090D]/25" />

        {/* Gold atmosphere */}
        <div className="absolute left-[15%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#C6A56B]/10 blur-[150px]" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-8 pt-36 sm:px-10 sm:pb-12 lg:px-20 lg:pt-40">

          {/* Label */}
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-[#C6A56B]"
            />

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-[9px] uppercase tracking-[0.35em] text-[#C6A56B] sm:text-[10px]"
            >
              FORMA / Selected works
            </motion.span>
          </div>

          {/* Main title */}
          <div className="max-w-7xl py-20">
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
              className="text-[clamp(4rem,12vw,11rem)] font-light leading-[0.85] tracking-[-0.075em]"
            >
              {["From first", "idea to", "lasting place."].map((line, index) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 80,
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
                  {index === 2 ? (
                    <em className="font-serif text-[#C6A56B]">{line}</em>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-9 max-w-md text-sm leading-7 text-white/55 sm:mt-10 sm:text-base"
            >
              A portfolio shaped by the land, made by many hands and
              designed to become part of someone's life for years to come.
            </motion.p>

            {/* Explore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-8"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B]/10 group-hover:shadow-[0_0_25px_rgba(198,165,107,0.2)]">
                  <MoveDown
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-y-1"
                  />
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 transition-colors group-hover:text-[#C6A56B]">
                  Explore our work
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 sm:text-[10px]">
              Architecture · Landscape · Living
            </span>

            <span className="text-xs text-white/45">
              Made to belong.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          02 — PROJECT INTRO
      ================================================== */}

      <section
        id="projects"
        className="relative overflow-hidden bg-[#F2F0EA] px-6 py-24 text-[#151515] sm:px-10 sm:py-32 lg:px-20 lg:py-40"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C6A56B]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">

            {/* Heading */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                  <span className="h-px w-8 bg-[#C6A56B]" />
                  The work behind the welcome
                </span>

                <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.07em]">
                  A place is
                  <br />
                  made long
                  <br />
                  <em className="font-serif text-[#A78852]">
                    before it opens.
                  </em>
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <div className="lg:col-span-4 lg:col-start-9">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="max-w-md text-sm leading-8 text-[#716D65]"
              >
                Every project is an unfolding story. From the first mark
                on paper to the moment a place finds its people, we bring
                together ideas, craft and a shared belief in better ways of living.
              </motion.p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full border border-[#C6A56B]/40 flex items-center justify-center">
                  <span className="font-serif text-xl text-[#A78852]">
                    04
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.25em] text-[#9D7D45]">
                    Our approach
                  </span>

                  <span className="mt-1 block text-sm text-[#716D65]">
                    One idea. Many hands.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — FEATURED PROJECT SELECTOR
      ================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] px-6 py-24 text-[#F4F0E8] sm:px-10 sm:py-32 lg:px-20 lg:py-36">

        {/* Background glows */}
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#C6A56B]/[0.06] blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#C6A56B]/[0.04] blur-[140px]" />

        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(198,165,107,1) 1px,transparent 1px),linear-gradient(90deg,rgba(198,165,107,1) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
                The portfolio
              </span>

              <h2 className="mt-6 text-4xl font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Places in <em className="font-serif text-[#C6A56B]">progress.</em>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-white/40">
              Select a project to take a closer look at the place,
              the idea and the intention behind it.
            </p>
          </motion.div>

          {/* Project navigation */}
          <div className="mb-8 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setActiveProject(index)}
                className={`group relative border-b border-white/10 py-5 text-left transition-colors duration-500 sm:px-5 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  activeProject === index
                    ? "text-[#C6A56B]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em]">
                      Project / 0{index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-light tracking-[-0.03em] sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#C6A56B]/50">
                    {activeProject === index ? (
                      <Check size={13} className="text-[#C6A56B]" />
                    ) : (
                      <Plus size={13} />
                    )}
                  </span>
                </div>

                {/* Selection bar */}
                <motion.div
                  initial={false}
                  animate={{
                    width: activeProject === index ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-px bg-[#C6A56B]"
                />
              </button>
            ))}
          </div>

          {/* Featured project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredProject.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55 }}
              className="grid grid-cols-1 overflow-hidden border border-white/10 lg:grid-cols-12"
            >
              {/* Featured image */}
              <div className="group relative min-h-[400px] overflow-hidden sm:min-h-[550px] lg:col-span-8 lg:min-h-[700px]">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.name} architectural project`}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/10" />

                {/* Status */}
                <span className="absolute left-5 top-5 border border-white/25 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-md sm:left-8 sm:top-8">
                  {featuredProject.status}
                </span>

                {/* Image caption */}
                <div className="absolute bottom-7 left-5 right-5 sm:bottom-10 sm:left-8 sm:right-8">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    FORMA / Selected work
                  </span>

                  <h3 className="mt-3 text-4xl font-light tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                    {featuredProject.name}
                  </h3>

                  <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60">
                    <span className="h-px w-8 bg-[#C6A56B]" />
                    {featuredProject.location}
                  </div>
                </div>
              </div>

              {/* Details panel */}
              <div className="relative flex flex-col justify-between bg-[#111219] p-7 sm:p-10 lg:col-span-4 lg:p-12">

                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A56B]">
                    Project details
                  </span>

                  <h3 className="mt-6 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                    {featuredProject.name}
                  </h3>

                  <div className="mt-8 border-y border-white/10 py-6">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                      Location
                    </span>

                    <p className="mt-3 text-sm text-white/75">
                      {featuredProject.location}
                    </p>
                  </div>

                  <div className="border-b border-white/10 py-6">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                      Current stage
                    </span>

                    <p className="mt-3 font-serif text-xl text-[#C6A56B]">
                      {featuredProject.status}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="max-w-sm text-sm leading-7 text-white/45">
                    A considered approach to place, proportion and living.
                    Each project begins with its surroundings and finds
                    its own way forward.
                  </p>

                  <Link
                    href="/residences"
                    className="group mt-8 flex items-center justify-between border border-white/15 px-5 py-4 transition-all duration-500 hover:border-[#C6A56B]/60 hover:bg-[#C6A56B]/[0.06]"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-[#C6A56B]">
                      Explore residences
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A56B] text-[#08090D] transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    FORMA / Portfolio
                  </span>

                  <span className="text-xs text-[#C6A56B]">
                    0{activeProject + 1} / 0{projects.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==================================================
          04 — ARCHITECTURAL PORTFOLIO GRID
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F2F0EA] px-6 py-24 text-[#151515] sm:px-10 sm:py-32 lg:px-20 lg:py-36">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                A study of place
              </span>

              <h2 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.07em]">
                Every project.
                <br />
                <em className="font-serif text-[#A78852]">
                  A new perspective.
                </em>
              </h2>
            </motion.div>

            <p className="max-w-md text-sm leading-8 text-[#716D65] md:justify-self-end">
              Different landscapes ask different questions. Our work
              explores the possibilities of each site, never repeating
              the same answer.
            </p>
          </div>

          {/* Asymmetrical gallery */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">

            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                onMouseEnter={() => setActiveProject(index)}
                className={`group relative ${
                  index === 0
                    ? "md:col-span-7"
                    : index === 1
                      ? "md:col-span-5 md:mt-28"
                      : "md:col-span-8 md:col-start-3"
                }`}
              >
                <Link href="/residences" className="block">

                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index === 0
                        ? "aspect-[4/5] sm:aspect-[4/3]"
                        : index === 1
                          ? "aspect-[4/5]"
                          : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} architecture`}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                    {/* Status */}
                    <span className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                      {project.status}
                    </span>

                    {/* Hover arrow */}
                    <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D] sm:right-7 sm:top-7">
                      <ArrowUpRight size={15} />
                    </span>

                    {/* Project caption */}
                    <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                        0{index + 1} / {project.location}
                      </span>

                      <h3 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                        {project.name}
                      </h3>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                          Discover the project
                        </span>

                        <span className="h-px w-10 bg-[#C6A56B] transition-all duration-500 group-hover:w-20" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          05 — INTERACTIVE PROCESS TIMELINE
      ================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] px-6 py-24 text-[#F4F0E8] sm:px-10 sm:py-32 lg:px-20 lg:py-36">

        {/* Ambient lighting */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A56B]/[0.05] blur-[150px]" />

        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(198,165,107,1) 1px,transparent 1px),linear-gradient(90deg,rgba(198,165,107,1) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
              A life cycle, made visible
            </span>

            <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.07em]">
              Nothing
              <br />
              happens <em className="font-serif text-[#C6A56B]">overnight.</em>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
              Behind every place is a series of thoughtful decisions.
              Follow the process, from the first conversation to
              the moment a place begins to belong.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Timeline controls */}
            <div className="lg:col-span-5">
              <div className="relative">

                {/* Progress track */}
                <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10">
                  <motion.div
                    className="w-full origin-top bg-[#C6A56B]"
                    animate={{
                      height: `${((activePhase + 1) / process.length) * 100}%`,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {process.map((phase, index) => {
                  const active = activePhase === index;

                  return (
                    <button
                      key={phase.number}
                      onClick={() => setActivePhase(index)}
                      className="group relative block w-full py-5 pl-12 text-left sm:py-7"
                    >
                      {/* Timeline dot */}
                      <span
                        className={`absolute left-[9px] top-[29px] h-[13px] w-[13px] rounded-full border transition-all duration-500 ${
                          active
                            ? "border-[#C6A56B] bg-[#C6A56B] shadow-[0_0_15px_rgba(198,165,107,0.5)]"
                            : "border-white/20 bg-[#08090D] group-hover:border-[#C6A56B]"
                        }`}
                      />

                      {/* Number and label */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span
                            className={`text-[9px] uppercase tracking-[0.25em] transition-colors ${
                              active
                                ? "text-[#C6A56B]"
                                : "text-white/35 group-hover:text-white/65"
                            }`}
                          >
                            Chapter {phase.number}
                          </span>

                          <h3
                            className={`mt-2 text-3xl font-light tracking-[-0.04em] transition-colors sm:text-4xl ${
                              active
                                ? "text-white"
                                : "text-white/45 group-hover:text-white/80"
                            }`}
                          >
                            {phase.title}
                          </h3>
                        </div>

                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
                            active
                              ? "border-[#C6A56B]/50 text-[#C6A56B]"
                              : "border-white/10 text-white/30 group-hover:border-white/30"
                          }`}
                        >
                          {active ? (
                            <Check size={13} />
                          ) : (
                            <Plus size={13} />
                          )}
                        </span>
                      </div>

                      <p
                        className={`mt-3 text-xs transition-colors ${
                          active ? "text-[#C6A56B]" : "text-white/30"
                        }`}
                      >
                        {phase.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline detail panel */}
            <div className="lg:col-span-7">

              <div className="relative min-h-[400px] border border-white/10 bg-[#111219] p-7 sm:min-h-[500px] sm:p-12 lg:min-h-[550px]">

                {/* Ambient glow */}
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[#C6A56B]/[0.04] blur-[100px]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                    transition={{ duration: 0.45 }}
                    className="relative"
                  >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
                      {process[activePhase].number} / The process
                    </span>

                    <h3 className="mt-10 text-4xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                      {process[activePhase].title}
                      <span className="block font-serif italic text-[#C6A56B]">
                        in intention.
                      </span>
                    </h3>

                    <p className="mt-8 max-w-md text-sm leading-8 text-white/50">
                      {process[activePhase].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom navigation */}
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-5 sm:bottom-10 sm:left-12 sm:right-12">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Explore each chapter
                  </span>

                  <div className="flex gap-2">
                    {process.map((phase, index) => (
                      <button
                        key={phase.number}
                        onClick={() => setActivePhase(index)}
                        aria-label={`Go to ${phase.title}`}
                        className={`h-1 transition-all duration-500 ${
                          activePhase === index
                            ? "w-10 bg-[#C6A56B]"
                            : "w-4 bg-white/20 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* ==================================================
      06 — PROJECT STATEMENT
  ================================================== */}

      <section className="relative min-h-[75svh] overflow-hidden bg-[#08090D]">

        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
            alt="A finished architectural residence in its landscape"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />

        <div className="relative z-10 flex min-h-[75svh] items-end px-6 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-36">

          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#E3C58B]">
                When the work becomes a place
              </span>

              <h2 className="mt-7 text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.88] tracking-[-0.075em] text-white">
                Built with care.
                <br />
                <em className="font-serif text-[#E3C58B]">
                  Lived with meaning.
                </em>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/55">
                The measure of our work is not simply how a place looks
                when it is finished. It is how it feels years later.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          07 — FINAL CTA
  ================================================== */}

      <section className="relative overflow-hidden bg-[#F2F0EA] px-6 py-28 text-[#151515] sm:px-10 sm:py-36 lg:px-20 lg:py-44">

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
          className="pointer-events-none absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C6A56B]/15 blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">

            {/* CTA copy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9D7D45]">
                  Made to belong
                </span>

                <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.075em]">
                  The next
                  <br />
                  chapter starts
                  <br />
                  <em className="font-serif text-[#A78852]">somewhere.</em>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <p className="mt-8 max-w-sm text-sm leading-7 text-[#716D65]">
                  Explore the residences we have created, and discover
                  the possibility of a place that feels entirely your own.
                </p>

                <Link
                  href="/residences"
                  className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#151515] px-7 py-4 text-[9px] uppercase tracking-[0.25em] text-[#F4F0E8] transition-all duration-500 hover:bg-[#C6A56B] hover:text-[#08090D] hover:shadow-[0_0_35px_rgba(198,165,107,0.25)] sm:text-[10px]"
                >
                  Explore residences

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A56B] text-[#08090D] transition-transform duration-500 group-hover:rotate-45">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
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
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90"
                  alt="Modern architectural residence"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                      FORMA / Projects
                    </span>

                    <p className="mt-2 font-serif text-2xl italic text-white">
                      Spaces with a soul.
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D]">
                    <ArrowUpRight size={15} />
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
