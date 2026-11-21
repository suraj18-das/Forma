
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Compass,
  MoveUpRight,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { residences, TourStop } from "@/lib/forma-data";

// Keep your existing imports for:
// residences, PageHero, ScrollReveal, TourStop

export function PropertyTourPage({ slug }: { slug: string }) {
  const home = residences.find((item) => item.slug === slug);
  const reduceMotion = useReducedMotion();

  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const fallbackTour: TourStop[] = [
    {
      chapter: "01 · The setting",
      title: "A beginning in the landscape",
      description:
        "We began by listening to the place, observing its light and preserving the character that makes it singular.",
      image: home?.cover ?? "",
      alt: `${home?.name ?? "Residence"} landscape and setting`,
    },
    {
      chapter: "02 · The making",
      title: "Made with local intention",
      description:
        "Honest materials and skilled local craft shape a residence that feels grounded in its surroundings.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
      alt: "Architectural work in progress",
    },
    {
      chapter: "03 · The arrival",
      title: "The home, in its setting",
      description:
        "A calm arrival leads from the landscape to the architecture, revealing the home one moment at a time.",
      image: home?.cover ?? "",
      alt: `${home?.name ?? "Residence"} exterior`,
    },
    {
      chapter: "04 · The living room",
      title: "A room to settle into",
      description:
        "Open, tactile living spaces bring daylight and the outdoors into the rhythm of the day.",
      image: home?.cover ?? "",
      alt: "Residence living room",
    },
    {
      chapter: "05 · The private suite",
      title: "A room of your own",
      description:
        "Thoughtful proportions, natural textures and quiet views create space to pause and restore.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
      alt: "Bedroom in natural light",
    },
  ];

  const tour: TourStop[] = home?.tour?.length
    ? home.tour
    : fallbackTour;

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(
        Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)),
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!tour.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.getAttribute("data-tour-index"),
            );

            if (!Number.isNaN(index)) {
              setActiveChapter(index);
            }
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      },
    );

    const sections = document.querySelectorAll("[data-tour-chapter]");

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [tour.length]);

  const scrollToChapter = (index: number) => {
    const target = document.getElementById(`tour-chapter-${index}`);

    target?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    setActiveChapter(index);
  };

  if (!home) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#08090D] px-5 text-[#F4F0E8] sm:px-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A56B]/[0.06] blur-[140px]" />
        </div>

        <div className="relative flex min-h-screen items-center justify-center">
          <div className="max-w-3xl text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C6A56B]">
              Residence / 404
            </span>

            <h1 className="mt-8 text-5xl font-light leading-[1.1] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Perhaps another
              <br />
              <span className="font-serif italic text-[#C6A56B]">
                place is waiting.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/45">
              This residence may have moved on. Discover the places that are
              waiting to be found.
            </p>

            <Link
              href="/residences"
              className="group mt-10 inline-flex items-center gap-4 border border-[#C6A56B]/30 px-7 py-4 text-[10px] tracking-[0.2em] uppercase transition-all duration-500 hover:border-[#C6A56B] hover:bg-[#C6A56B]/5"
            >
              <ArrowLeft size={14} />
              Back to residences
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-[#08090D] text-[#F4F0E8]">
      {/* ============================================
          GLOBAL TOUR PROGRESS
      ============================================ */}

      <motion.div
        className="fixed left-0 top-0 z-[100] h-[2px] bg-[#C6A56B] shadow-[0_0_12px_rgba(198,165,107,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ============================================
          CINEMATIC HERO
      ============================================ */}

      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <Image
          src={home.cover}
          alt={`${home.name} architectural exterior`}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#08090D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

        {/* Ambient light */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#C6A56B]/10 blur-[150px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-12 pt-36 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#C6A56B]" />

            <span className="text-[9px] tracking-[0.32em] uppercase text-[#E3C58B] sm:text-[10px]">
              {home.location} · {home.type}
            </span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-8 max-w-5xl text-[clamp(3rem,9vw,9rem)] font-light leading-[0.94] tracking-[-0.065em]"
          >
            {home.summary.split(" ").slice(0, 3).join(" ")}
            <br />

            <span className="font-serif italic text-[#E3C58B]">
              {home.summary.split(" ").slice(3).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.12em] text-white/65">
                {home.name}
              </p>

              <p className="mt-3 text-sm font-light text-white/80">
                From {home.price}
              </p>
            </div>

            <button
              onClick={() => scrollToChapter(0)}
              className="group flex w-fit items-center gap-4 border border-white/25 px-6 py-4 text-[9px] tracking-[0.25em] uppercase transition-all duration-500 hover:border-[#C6A56B] hover:bg-[#C6A56B]/10"
            >
              Explore the residence

              <ArrowDown
                size={14}
                className="text-[#E3C58B] transition-transform duration-500 group-hover:translate-y-1"
              />
            </button>
          </motion.div>
        </div>

        {/* Hero bottom metadata */}
        <div className="absolute bottom-5 left-5 right-5 z-10 hidden items-center justify-between border-t border-white/20 pt-4 sm:flex sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/40">
            FORMA · Private residences
          </span>

          <span className="text-[9px] tracking-[0.25em] uppercase text-white/40">
            Scroll to experience
          </span>
        </div>
      </section>

      {/* ============================================
          INTRODUCTION
      ============================================ */}

      <section className="relative px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#C6A56B]/[0.035] blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C6A56B]"
            >
              <Compass size={14} />
              A complete place, at your pace
            </motion.span>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-9 text-5xl font-light leading-[1.06] tracking-[-0.05em] sm:text-7xl"
            >
              Come in.
              <br />

              <span className="font-serif italic text-[#C6A56B]">
                Take your time.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="max-w-xl text-sm leading-8 text-white/50 sm:text-base sm:leading-9">
              {home.description}
            </p>

            {/* Property facts */}
            <div className="mt-10 grid grid-cols-3 border-y border-white/10 py-6">
              {[
                { label: "Location", value: home.location },
                { label: "Residence", value: home.size },
                { label: "Bedrooms", value: home.beds },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="min-w-0 border-r border-white/10 px-3 first:pl-0 last:border-0 sm:px-5"
                >
                  <span className="block text-[8px] tracking-[0.2em] uppercase text-white/35 sm:text-[9px]">
                    {fact.label}
                  </span>

                  <span className="mt-3 block break-words text-xs font-light text-[#E3C58B] sm:text-sm">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CHAPTER NAVIGATION
      ============================================ */}

      <section className="relative border-y border-white/[0.07] bg-[#0C0D11]">
        <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-10 sm:py-14 lg:px-16">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
              Your private walkthrough
            </span>

            <span className="text-[9px] tracking-[0.2em] uppercase text-white/35">
              {String(activeChapter + 1).padStart(2, "0")} /{" "}
              {String(tour.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {tour.map((stop, index) => (
              <button
                key={stop.chapter}
                onClick={() => scrollToChapter(index)}
                className={`group relative overflow-hidden border p-4 text-left transition-all duration-500 sm:p-5 ${
                  activeChapter === index
                    ? "border-[#C6A56B]/50 bg-[#C6A56B]/[0.06]"
                    : "border-white/[0.07] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[9px] tracking-[0.2em] ${
                      activeChapter === index
                        ? "text-[#E3C58B]"
                        : "text-white/35"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  <span className="ml-2">/ {tour.length}</span>
                  </span>

                  <ArrowUpRight
                    size={13}
                    className={`transition-all duration-300 ${
                      activeChapter === index
                        ? "text-[#C6A56B]"
                        : "text-white/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60"
                    }`}
                  />
                </div>

                <span
                  className={`mt-5 block text-xs font-light transition-colors sm:text-sm ${
                    activeChapter === index
                      ? "text-white"
                      : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {stop.chapter.split("·")[1]?.trim() ?? stop.chapter}
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#C6A56B]"
                  animate={{
                    width: activeChapter === index ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TOUR CHAPTERS
      ============================================ */}

      <section className="relative">
        {/* Vertical timeline */}
        <div className="pointer-events-none absolute bottom-0 left-5 top-0 z-10 hidden w-px bg-white/[0.08] sm:left-10 lg:left-[7.5%] lg:block">
          <motion.div
            className="w-full origin-top bg-[#C6A56B]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {tour.map((stop, index) => {
          const reversed = index % 2 !== 0;

          return (
            <section
              key={stop.chapter}
              id={`tour-chapter-${index}`}
              data-tour-chapter
              data-tour-index={index}
              className="scroll-mt-20 border-b border-white/[0.06]"
            >
              <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                    reversed ? "" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: reversed ? 40 : -40 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className={`relative lg:col-span-7 ${
                      reversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="group relative aspect-[4/5] max-h-[800px] overflow-hidden bg-[#15161B] sm:aspect-[16/11] lg:aspect-[4/5]">
                      <Image
                        src={stop.image}
                        alt={stop.alt}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 58vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      {/* Image chapter badge */}
                      <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-8 sm:left-8">
                        <span className="h-px w-8 bg-[#C6A56B]" />

                        <span className="text-[9px] tracking-[0.25em] uppercase text-white/80">
                          Chapter {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Decorative image frame */}
                      <div className="pointer-events-none absolute inset-4 border border-white/10 sm:inset-6" />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: reversed ? -30 : 30 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className={`flex flex-col lg:col-span-5 ${
                      reversed ? "lg:order-1" : "lg:order-2"
                    } ${reversed ? "lg:pl-5" : "lg:pr-5"}`}
                  >
                    {/* Chapter header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <span className="text-[9px] tracking-[0.25em] uppercase text-[#C6A56B]">
                        {stop.chapter}
                      </span>

                      <span className="font-serif text-sm italic text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-8 text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:mt-12 sm:text-5xl lg:text-6xl">
                      {stop.title}
                    </h2>

                    <p className="mt-7 max-w-md text-sm leading-7 text-white/45 sm:mt-8 sm:text-base sm:leading-8">
                      {stop.description}
                    </p>

                    {/* Chapter navigation */}
                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 sm:mt-14">
                      <button
                        onClick={() => scrollToChapter(Math.max(0, index - 1))}
                        disabled={index === 0}
                        className="group inline-flex items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/45 transition-colors hover:text-[#E3C58B] disabled:cursor-not-allowed disabled:opacity-20"
                      >
                        <ArrowLeft
                          size={14}
                          className="transition-transform group-hover:-translate-x-1"
                        />
                        Previous
                      </button>

                      <span className="text-[9px] tracking-[0.15em] text-white/25">
                        {index + 1} of {tour.length}
                      </span>

                      <button
                        onClick={() =>
                          scrollToChapter(
                            Math.min(tour.length - 1, index + 1),
                          )
                        }
                        disabled={index === tour.length - 1}
                        className="group inline-flex items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/45 transition-colors hover:text-[#E3C58B] disabled:cursor-not-allowed disabled:opacity-20"
                      >
                        Next
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      {/* ============================================
          FINAL MOMENT
      ============================================ */}

      <section
        id="tour-finish"
        className="relative overflow-hidden px-5 py-28 sm:px-10 sm:py-40 lg:px-16 lg:py-52"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A56B]/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center justify-center gap-3 text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
              <span className="h-px w-8 bg-[#C6A56B]" />
              The place, in full
              <span className="h-px w-8 bg-[#C6A56B]" />
            </span>

            <h2 className="mt-10 text-5xl font-light leading-[1.05] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              Every room.
              <br />
              <span className="font-serif italic text-[#C6A56B]">
                Every possibility.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/40 sm:text-base">
              Nothing replaces being here. We would be glad to show you around in
              person, at your own pace.
            </p>

            <Link
              href="/contact"
              className="group relative mt-12 inline-flex items-center gap-5 overflow-hidden border border-[#C6A56B]/40 px-8 py-5 text-[9px] tracking-[0.25em] uppercase transition-all duration-500 hover:border-[#C6A56B] sm:mt-14"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#C6A56B] transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#08090D]">
                Arrange a private visit
              </span>

              <ArrowUpRight
                size={15}
                className="relative z-10 text-[#C6A56B] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#08090D]"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          RELATED RESIDENCES
      ============================================ */}

      <section className="border-t border-white/[0.08] bg-[#0C0D11] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A56B]">
                Continue exploring
              </span>

              <h2 className="mt-6 text-4xl font-light tracking-[-0.05em] sm:text-6xl">
                More places to{" "}
                <span className="font-serif italic text-[#C6A56B]">
                  belong.
                </span>
              </h2>
            </div>

            <Link
              href="/residences"
              className="group inline-flex items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/45 transition-colors hover:text-[#E3C58B]"
            >
              All residences
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {residences
              .filter((item) => item.slug !== slug)
              .map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/residences/${item.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#16171C]">
                      <Image
                        src={item.cover}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                      <span className="absolute left-4 top-4 border border-white/20 bg-black/20 px-3 py-2 text-[8px] tracking-[0.2em] uppercase text-white/80 backdrop-blur-md">
                        {item.status}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#08090D]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3 border-b border-white/10 py-5">
                      <div>
                        <span className="text-[9px] tracking-[0.2em] uppercase text-white/35">
                          {item.location}
                        </span>

                        <h3 className="mt-2 text-lg font-light tracking-wide text-white/85 transition-colors group-hover:text-[#E3C58B]">
                          {item.name}
                        </h3>
                      </div>

                      <span className="text-xs font-light text-[#C6A56B]">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL BACK NAVIGATION
      ============================================ */}

      <div className="border-t border-white/[0.07] px-5 py-7 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          <Link
            href="/residences"
            className="group inline-flex items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/35 transition-colors hover:text-[#E3C58B]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to collection
          </Link>

          <span className="text-[8px] tracking-[0.25em] uppercase text-white/20">
            FORMA · 2026
          </span>
        </div>
      </div>
    </main>
  );
}
