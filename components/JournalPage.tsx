
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  MoveUpRight,
} from "lucide-react";

const journalStories = [
  {
    id: "01",
    category: "Architecture",
    title: "The quiet luxury of enough.",
    description:
      "On choosing less, noticing more and making a home that leaves room for life.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    readTime: "06 min read",
    date: "01",
    featured: true,
  },
  {
    id: "02",
    category: "Place",
    title: "Learning to live with the landscape.",
    description:
      "What changes when architecture begins with listening instead of arriving with answers.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",
    readTime: "08 min read",
    date: "02",
  },
  {
    id: "03",
    category: "Perspective",
    title: "A slower way to find home.",
    description:
      "A considered guide to choosing a place that works for the life you want to live.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    readTime: "05 min read",
    date: "03",
  },
  {
    id: "04",
    category: "Architecture",
    title: "Spaces that breathe.",
    description:
      "The beauty of natural light, honest materials and the architecture of doing nothing.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    readTime: "07 min read",
    date: "04",
  },
  {
    id: "05",
    category: "Lifestyle",
    title: "The ritual of returning.",
    description:
      "Why the best homes are not simply places we inhabit, but places we return to ourselves.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    readTime: "04 min read",
    date: "05",
  },
  {
    id: "06",
    category: "Place",
    title: "Beyond the familiar.",
    description:
      "Finding the unexpected beauty of a place before the rest of the world catches up.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    readTime: "09 min read",
    date: "06",
  },
];

const categories = ["All stories", "Architecture", "Place", "Perspective", "Lifestyle"];

const revealVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0 },
};

const editorialEase = [0.22, 1, 0.36, 1] as const;

export function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All stories");

  const filteredStories =
    activeCategory === "All stories"
      ? journalStories
      : journalStories.filter(
          (story) => story.category === activeCategory
        );

  const featuredStory = journalStories[0];

  const remainingStories = filteredStories.filter(
    (story) => story.id !== featuredStory.id
  );

  const showFeatured =
    activeCategory === "All stories" ||
    activeCategory === featuredStory.category;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090D] text-[#F4F0E8">

      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198,165,107,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198,165,107,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Ambient gold light */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            opacity: [0.25, 0.45, 0.3, 0.25],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#C6A56B]/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            opacity: [0.15, 0.3, 0.2, 0.15],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[-20%] h-[500px] w-[500px] rounded-full bg-[#C6A56B]/10 blur-[130px]"
        />
      </div>

      {/* =========================================================
          JOURNAL HERO
      ========================================================= */}

      <section className="relative z-10 px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-16 lg:pt-52">

        <div className="mx-auto max-w-[1600px]">

          {/* Top editorial information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: editorialEase }}
            className="mb-10 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C6A56B]" />

              <span className="text-[10px] uppercase tracking-[0.32em] text-[#C6A56B] sm:text-xs">
                The FORMA Journal
              </span>
            </div>

            <span className="text-[10px] tracking-[0.2em] text-white/35">
              THOUGHTS · PLACES · PERSPECTIVES
            </span>
          </motion.div>

          {/* Hero headline */}
          <div className="relative">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="relative z-10 max-w-[1300px] font-serif text-[17vw] font-normal leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[10.2vw]"
            >
              <motion.span
                variants={revealVariants}
                transition={{ duration: 1.1, ease: editorialEase }}
                className="block"
              >
                Notes on
              </motion.span>

              <motion.span
                variants={revealVariants}
                transition={{ duration: 1.1, ease: editorialEase }}
                className="ml-[8%] block italic text-[#C6A56B]"
              >
                the art of
              </motion.span>

              <motion.span
                variants={revealVariants}
                transition={{ duration: 1.1, ease: editorialEase }}
                className="block"
              >
                living.
              </motion.span>
            </motion.h1>

            {/* Side text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex flex-col gap-8 sm:ml-[52%] sm:mt-16 sm:max-w-md lg:ml-[58%]"
            >
              <p className="max-w-[340px] text-sm leading-8 text-white/50 sm:text-base">
                Thoughts on architecture, place and the everyday rituals
                that make a home. A collection of stories to pause,
                reflect and see things differently.
              </p>

              <a
                href="#journal-stories"
                className="group inline-flex w-fit items-center gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A56B]/30 transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B]/10 group-hover:shadow-[0_0_25px_rgba(198,165,107,0.18)]">
                  <ArrowDown
                    size={16}
                    className="text-[#C6A56B] transition-transform duration-500 group-hover:translate-y-1"
                  />
                </span>

                <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 transition-colors group-hover:text-[#C6A56B]">
                  Explore the journal
                </span>
              </a>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.45,
              ease: editorialEase,
            }}
            className="group relative mt-20 overflow-hidden sm:mt-28 lg:mt-36"
          >
            <div className="relative h-[55vh] min-h-[360px] overflow-hidden sm:h-[70vh] lg:h-[82vh]">

              <motion.img
                src={featuredStory.image}
                alt="A thoughtfully designed contemporary residence"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: editorialEase }}
                className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]"
              />

              {/* Image layers */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/90 via-[#08090D]/15 to-[#08090D]/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/30 to-transparent" />

              {/* Gold border */}
              <div className="pointer-events-none absolute inset-4 border border-white/10 sm:inset-8" />

              {/* Floating featured label */}
              <div className="absolute left-7 top-7 flex items-center gap-3 sm:left-12 sm:top-12">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A56B] shadow-[0_0_12px_#C6A56B]" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/80 sm:text-[10px]">
                  Featured story
                </span>
              </div>

              {/* Image content */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-7 sm:p-12 lg:p-16">

                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B]">
                    01 / Architecture
                  </span>

                  <span className="h-px w-10 bg-[#C6A56B]/40" />

                  <span className="text-[10px] tracking-widest text-white/50">
                    06 MIN READ
                  </span>
                </div>

                <h2 className="max-w-4xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                  The quiet luxury
                  <br />
                  <span className="italic text-[#C6A56B]">
                    of enough.
                  </span>
                </h2>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-6">

                  <p className="max-w-md text-xs leading-7 text-white/65 sm:text-sm sm:leading-8">
                    On choosing less, noticing more and making a
                    home that leaves room for life.
                  </p>

                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]"
                  >
                    <span>Explore the story</span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A56B]/50 transition-all duration-500 group-hover/link:bg-[#C6A56B] group-hover/link:text-[#08090D]">
                      <ArrowUpRight
                        size={16}
                        className="text-[#C6A56B] transition-colors group-hover/link:text-[#08090D]"
                      />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Animated image edge */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-[#C6A56B]"
              />
            </div>
          </motion.div>

          {/* Hero footer */}
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
              A journal by FORMA
            </span>

            <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
              Est. in thought
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL INTRO
      ========================================================= */}

      <section className="relative z-10 px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: editorialEase }}
            className="lg:col-span-7"
          >
            <span className="mb-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
              <BookOpen size={13} />
              Stories from our world
            </span>

            <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.05em] sm:text-7xl lg:text-[7.5rem]">
              Ideas to take
              <br />
              <span className="italic text-white/40">
                with you.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: editorialEase }}
            className="flex flex-col justify-end lg:col-span-4 lg:col-start-9"
          >
            <p className="max-w-md text-sm leading-8 text-white/50 sm:text-base sm:leading-9">
              Field notes, conversations and considered guides
              on finding a place that feels like yours.
              <span className="text-[#C6A56B]">
                {" "}Not simply a place to live, but a way to live.
              </span>
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[#C6A56B]/60" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                Curated perspectives
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          STORY COLLECTION
      ========================================================= */}

      <section
        id="journal-stories"
        className="relative z-10 scroll-mt-24 px-5 pb-32 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-[1600px]">

          {/* Collection header */}
          <div className="mb-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end">

            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 block text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]"
              >
                The collection
              </motion.span>

              <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-6xl">
                Stories worth
                <span className="ml-3 italic text-white/40">
                  staying for.
                </span>
              </h2>
            </div>

            <span className="text-xs tracking-widest text-white/30">
              0{filteredStories.length} STORIES
            </span>
          </div>

          {/* Interactive category filters */}
          <div className="mb-16 flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative flex-shrink-0 overflow-hidden rounded-full border px-5 py-3 text-[9px] uppercase tracking-[0.2em] transition-all duration-500 sm:px-6 sm:text-[10px] ${
                    isActive
                      ? "border-[#C6A56B] text-[#C6A56B]"
                      : "border-white/10 text-white/40 hover:border-[#C6A56B]/40 hover:text-white/70"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="journal-filter"
                      className="absolute inset-0 rounded-full bg-[#C6A56B]/[0.07]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>

          {/* Featured story within collection */}
          <AnimatePresence mode="wait">
            {showFeatured && (
              <motion.article
                key="featured-collection-story"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
              >
                {/* Image */}
                <Link
                  href="/contact"
                  className="relative block overflow-hidden lg:col-span-7"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={featuredStory.image}
                      alt={featuredStory.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                    {/* Hover gold frame */}
                    <div className="pointer-events-none absolute inset-5 border border-white/10 transition-all duration-700 group-hover:inset-3 group-hover:border-[#C6A56B]/40 sm:inset-8" />

                    <span className="absolute bottom-8 left-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D]">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col justify-center lg:col-span-5">
                  <div className="mb-8 flex items-center gap-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A56B]">
                      01 / Architecture
                    </span>

                    <span className="h-px w-8 bg-[#C6A56B]/40" />

                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      06 min
                    </span>
                  </div>

                  <h3 className="font-serif text-4xl leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    The quiet luxury
                    <br />
                    <span className="italic text-[#C6A56B]">
                      of enough.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-8 text-white/45">
                    On choosing less, noticing more and making a
                    home that leaves room for life.
                  </p>

                  <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Featured editorial
                    </span>

                    <Link
                      href="/contact"
                      className="group/read flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#C6A56B]"
                    >
                      Read story

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/read:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          {/* Remaining stories */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {remainingStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: editorialEase,
                  }}
                  className="group relative"
                >
                  {/* Card image */}
                  <Link
                    href="/contact"
                    className="relative mb-7 block overflow-hidden"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#15161B]">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.07]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                      {/* Hover frame */}
                      <div className="pointer-events-none absolute inset-4 border border-white/10 transition-all duration-700 group-hover:inset-2 group-hover:border-[#C6A56B]/40" />

                      {/* Story number */}
                      <div className="absolute left-7 top-7">
                        <span className="font-serif text-3xl text-white/70 transition-colors duration-500 group-hover:text-[#C6A56B]">
                          {story.id}
                        </span>
                      </div>

                      {/* Hover icon */}
                      <div className="absolute bottom-7 right-7 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D]">
                        <MoveUpRight size={16} />
                      </div>
                    </div>
                  </Link>

                  {/* Card metadata */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A56B]">
                      {story.category}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                      {story.readTime}
                    </span>
                  </div>

                  {/* Card title */}
                  <Link href="/contact" className="block">
                    <h3 className="font-serif text-3xl leading-[1.12] tracking-[-0.035em] transition-colors duration-500 group-hover:text-[#C6A56B] sm:text-4xl">
                      {story.title}
                    </h3>
                  </Link>

                  <p className="mt-4 text-xs leading-7 text-white/40 sm:text-sm">
                    {story.description}
                  </p>

                  {/* Read link */}
                  <Link
                    href="/contact"
                    className="group/link mt-7 inline-flex items-center gap-3 border-b border-white/10 pb-3 text-[9px] uppercase tracking-[0.22em] text-white/50 transition-colors duration-500 hover:border-[#C6A56B]/50 hover:text-[#C6A56B]"
                  >
                    Read the story

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty filtered state */}
          {remainingStories.length === 0 && !showFeatured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-28 text-center"
            >
              <p className="font-serif text-4xl italic text-white/40">
                More stories are on their way.
              </p>

              <button
                onClick={() => setActiveCategory("All stories")}
                className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] hover:text-[#E3C58B]"
              >
                Explore all stories →
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* =========================================================
          EDITORIAL CTA
      ========================================================= */}

      <section className="relative z-10 overflow-hidden border-t border-white/10 px-5 py-28 sm:px-8 sm:py-36 lg:px-16">

        {/* CTA atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A56B]/[0.06] blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(198,165,107,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(198,165,107,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: editorialEase }}
          className="relative mx-auto max-w-[1200px] text-center"
        >
          <span className="mb-8 inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#C6A56B]">
            <span className="h-px w-8 bg-[#C6A56B]/50" />
            A thought worth sharing
            <span className="h-px w-8 bg-[#C6A56B]/50" />
          </span>

          <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.05em] sm:text-7xl lg:text-[8rem]">
            Perhaps your next
            <br />
            chapter begins
            <span className="block italic text-[#C6A56B]">
              somewhere here.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-sm leading-8 text-white/40">
            Some places change the way we see the world.
            Perhaps we can help you find yours.
          </p>

          <Link
            href="/residences"
            className="group relative mt-12 inline-flex items-center gap-5 overflow-hidden rounded-full border border-[#C6A56B]/40 px-8 py-5 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-[#C6A56B] hover:shadow-[0_0_35px_rgba(198,165,107,0.12)]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#C6A56B] transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#08090D]">
              Discover our residences
            </span>

            <ArrowUpRight
              size={15}
              className="relative z-10 text-[#C6A56B] transition-all duration-500 group-hover:rotate-45 group-hover:text-[#08090D]"
            />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
