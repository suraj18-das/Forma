
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ArrowDownRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";

// Keep your existing `properties` array import.

const properties = [
  {
    name: "Villa Néro",
    location: "Ibiza, Spain",
    type: "Private residence",
    price: "€3.1M",
    status: "New release",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    slug: "villa-nero",
    number: "01",
    description:
      "A sanctuary shaped by Mediterranean light, natural textures and the art of living slowly.",
  },
  {
    name: "Casa Lume",
    location: "Comporta, Portugal",
    type: "Coastal retreat",
    price: "€2.4M",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    slug: "casa-lume",
    number: "02",
    description:
      "An architectural retreat where the landscape becomes part of the everyday.",
  },
  {
    name: "The Meridian",
    location: "Lisbon, Portugal",
    type: "City residence",
    price: "€890K",
    status: "Almost complete",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    slug: "the-meridian",
    number: "03",
    description:
      "A contemporary interpretation of city living, designed to feel open, calm and timeless.",
  },
];

export default function PropertyShowcase() {
  const [activeProperty, setActiveProperty] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const property = properties[activeProperty];
  const total = properties.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.35],
    reduceMotion ? [0, 0] : [-130, 0]
  );

  const headingRightX = useTransform(
    scrollYProgress,
    [0, 0.35],
    reduceMotion ? [0, 0] : [130, 0]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-45, 45]
  );

  const changeProperty = (direction: number) => {
    setActiveProperty((current) =>
      (current + direction + total) % total
    );
  };

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={sectionRef}
      id="residences"
      className="relative isolate overflow-hidden bg-[#080B0D] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B9FF66]/[0.06] blur-[130px]" />
        <div className="absolute -right-40 top-[45%] h-[600px] w-[600px] rounded-full bg-[#00E5FF]/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-5 sm:px-10 lg:px-16 xl:px-24">
        {/* SECTION HEADER */}
        <div className="mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 flex flex-wrap items-center justify-between gap-5"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B9FF66]/40 text-xs text-[#c6a56b]">
                03
              </span>

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/55">
                Explore the collection
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#c6a56b] shadow-[0_0_14px_#c6a56b]" />
              Curated residences
            </div>
          </motion.div>

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="overflow-hidden">
              <motion.h2
                style={{ x: headingX }}
                className="text-[clamp(3.3rem,7.5vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.075em]"
              >
                FIND YOUR
              </motion.h2>

              <motion.h2
                style={{ x: headingRightX }}
                className="bg-gradient-to-r from-[#c6a56b] via-[#D5FF9D] to-[#00E5FF] bg-clip-text text-[clamp(3.3rem,7.5vw,8.5rem)] font-semibold leading-[1.05] tracking-[-0.075em] text-transparent"
              >
                HORIZON.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-[320px] lg:pb-3"
            >
              <ArrowDownRight
                size={30}
                strokeWidth={1}
                className="mb-5 text-[#c6a56b]"
              />

              <p className="text-sm leading-[1.9] text-white/50 sm:text-base">
                Extraordinary spaces. Distinctive details.
                Discover residences designed around the way
                you want to live.
              </p>
            </motion.div>
          </div>
        </div>

        {/* MAIN PROPERTY STAGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 100,
            scale: reduceMotion ? 1 : 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-[#c6a56b]/50 via-white/5 to-[#00E5FF]/40 blur-[2px]" />

          <div className="relative h-[620px] overflow-hidden rounded-[25px] bg-[#171D1D] sm:h-[700px] lg:h-[760px]">
            {/* Image transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={property.slug}
                initial={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 1.12,
                  clipPath: reduceMotion
                    ? "inset(0% 0% 0% 0%)"
                    : "inset(0% 12% 0% 12%)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0%)",
                }}
                exit={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 1.04,
                }}
                transition={{
                  duration: reduceMotion ? 0.15 : 0.85,
                  ease,
                }}
                className="absolute inset-0"
              >
                <motion.div
                  style={{ y: imageY }}
                  className="absolute -inset-y-16 inset-x-0"
                >
                  <Image
                    src={property.image}
                    alt={`${property.name} in ${property.location}`}
                    fill
                    unoptimized
                    sizes="100vw"
                    className="object-cover"
                    priority={activeProperty === 0}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Image overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

            {/* TOP BAR */}
            <div className="absolute left-5 right-5 top-5 z-20 flex flex-wrap items-start justify-between gap-4 sm:left-9 sm:right-9 sm:top-9">
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-3 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#B9FF66] shadow-[0_0_12px_#B9FF66]" />

                <span className="text-[10px] uppercase tracking-[0.2em]">
                  {property.status}
                </span>
              </div>

              <div className="rounded-full border border-white/20 bg-black/30 px-5 py-3 text-xs tracking-[0.15em] backdrop-blur-xl">
                <span className="text-[#B9FF66]">
                  {String(activeProperty + 1).padStart(2, "0")}
                </span>
                <span className="mx-2 text-white/40">/</span>
                <span>{String(total).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Property details */}
            <div className="absolute inset-x-5 bottom-6 z-20 sm:inset-x-9 sm:bottom-9 lg:inset-x-12 lg:bottom-12">
              <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={property.slug + "-info"}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -50,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 40,
                    }}
                    transition={{ duration: 0.55, ease }}
                    className="max-w-2xl"
                  >
                    <div className="mb-5 flex items-center gap-2 text-[#B9FF66]">
                      <MapPin size={15} />
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
                        {property.location}
                      </span>
                    </div>

                    <h3 className="text-[clamp(2.5rem,5.5vw,6rem)] font-semibold leading-[1] tracking-[-0.065em]">
                      {property.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/70 sm:text-base">
                      {property.description}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <span className="rounded-full border border-white/25 px-4 py-2 text-[10px] uppercase tracking-[0.15em] backdrop-blur-xl">
                        {property.type}
                      </span>

                      <span className="text-lg font-semibold tracking-tight text-[#B9FF66] sm:text-2xl">
                        {property.price}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <Link
                  href={`/residences/${property.slug}`}
                  className="group flex shrink-0 items-center gap-5 rounded-full border border-[#c6a56b]/40 bg-[#c6a56b] py-3 pl-6 pr-3 text-black shadow-[0_0_35px_rgba(185,255,102,0.18)] transition-all duration-500 hover:shadow-[0_0_55px_rgba(185,185,102,0.4)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                    Explore residence
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[#c6a56b] transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Vertical side label */}
            <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] lg:block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                Discover extraordinary living
              </span>
            </div>
          </div>
        </motion.div>

        {/* PROPERTY NAVIGATION */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Thumbnail selector */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {properties.map((item, index) => {
              const isActive = activeProperty === index;

              return (
                <motion.button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveProperty(index)}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 35,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  aria-pressed={isActive}
                  className={`group relative flex min-w-0 items-center gap-4 overflow-hidden rounded-2xl border p-3 text-left transition-colors duration-500 ${
                    isActive
                      ? "border-[#B9FF66]/60 bg-[#B9FF66]/[0.08]"
                      : "border-white/10 bg-white/[0.035] hover:border-white/30 hover:bg-white/[0.06]"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-[78px] w-[90px] shrink-0 overflow-hidden rounded-xl bg-white/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      sizes="90px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className={`text-[10px] tracking-[0.15em] ${
                        isActive ? "text-[#B9FF66]" : "text-white/40"
                      }`}
                    >
                      {item.number}
                    </span>

                    <h4 className="mt-1 truncate text-sm font-medium tracking-[-0.02em]">
                      {item.name}
                    </h4>

                    <p className="mt-1 truncate text-xs text-white/40">
                      {item.location}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[#c6a56b]"
                        : "text-white/30 group-hover:text-white"
                    }`}
                  />

                  {isActive && (
                    <motion.div
                      layoutId="active-property-line"
                      className="absolute inset-x-5 bottom-0 h-[2px] bg-[#c6a56b] shadow-[0_0_14px_#c6a56b]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Arrow controls */}
          <div className="flex items-center justify-between gap-5 lg:justify-end">
            <span className="text-xs tracking-[0.15em] text-white/40 lg:hidden">
              Browse residences
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => changeProperty(-1)}
                aria-label="Previous property"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#c6a56b] hover:bg-[#c6a56b] hover:text-black"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => changeProperty(1)}
                aria-label="Next property"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c6a56b] bg-[#c6a56b] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(198,165,107,0.35)]"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-10 flex items-center gap-5">
          <span className="text-xs font-medium text-[#B9FF66]">
            {String(activeProperty + 1).padStart(2, "0")}
          </span>

          <div className="relative h-[2px] flex-1 overflow-hidden bg-white/10">
            <motion.div
              animate={{
                width: `${((activeProperty + 1) / total) * 100}%`,
              }}
              transition={{ duration: 0.55, ease }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#B9FF66] to-[#00E5FF] shadow-[0_0_12px_#B9FF66]"
            />
          </div>

          <span className="text-xs text-white/40">
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Closing detail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end lg:mt-28"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B9FF66]">
              Beyond ordinary
            </span>

            <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-5xl">
              Your next chapter
              <span className="text-white/35"> starts here.</span>
            </h3>
          </div>

          <Link
            href="/residences"
            className="group inline-flex w-fit items-center gap-5 text-xs font-semibold uppercase tracking-[0.15em]"
          >
            View all residences
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B9FF66]/50 text-[#B9FF66] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#B9FF66] group-hover:text-black">
              <MoveUpRight size={19} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
