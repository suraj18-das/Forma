
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  MoveRight,
  Sparkles,
  Asterisk,
  MoveUpRight,
} from "lucide-react";

const philosophyImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90";

// Keep your existing philosophyImage import.
// Example:
// import philosophyImage from "@/public/living-room.png";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-65, 65]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.12, 1.04, 1.12]
  );

  const floatingY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [35, -35]
  );

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 65,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 1.05,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative isolate overflow-hidden bg-[#F4F1EA] text-[#252A24]"
    >
      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #252A24 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="relative mx-auto max-w-[1800px] px-6 pt-20 pb-16 sm:px-10 md:pt-28 lg:px-16 lg:pt-36 lg:pb-28 xl:px-24">
        {/* Top metadata */}
        <div className="flex items-start justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252A24]/25 text-[11px] font-medium">
              01
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs">
              The Art of Living
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden text-right md:block"
          >
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#777C73]">
              A considered approach
            </span>
            <span className="mt-2 block font-serif text-lg italic">
              Beyond the ordinary.
            </span>
          </motion.div>
        </div>

        {/* Editorial headline */}
        <div className="relative z-10 mt-16 lg:mt-24">
          <div className="overflow-hidden">
            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-[clamp(3.5rem,9vw,10rem)] leading-[0.95] font-normal tracking-[-0.065em]"
            >
              More than
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.12 }}
              className="flex flex-wrap items-baseline gap-x-4 lg:gap-x-8"
            >
              <h2 className="font-serif text-[clamp(3.5rem,9vw,10rem)] leading-[1.05] tracking-[-0.065em]">
                just
              </h2>

              <span className="font-serif text-[clamp(3.5rem,9vw,10rem)] leading-[1.05] italic tracking-[-0.065em] text-[#8B947D]">
                a home.
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 flex flex-col justify-between gap-10 border-t border-[#252A24]/20 pt-8 md:flex-row md:items-end lg:mt-14"
          >
            <div className="flex items-start gap-5">
              <ArrowDownRight
                size={27}
                strokeWidth={1}
                className="mt-1 shrink-0 text-[#8B947D]"
              />

              <p className="max-w-[410px] text-base leading-[1.8] text-[#5E645B] sm:text-lg">
                A place shaped by light, grounded in nature,
                and designed around the beautiful simplicity
                of everyday living.
              </p>
            </div>

            <Link
              href="/studio"
              className="group inline-flex w-fit items-center gap-5 text-xs font-semibold uppercase tracking-[0.16em]"
            >
              <span className="relative pb-2">
                Discover our philosophy
                <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#252A24] transition-transform duration-500 group-hover:scale-x-0" />
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#252A24] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#252A24] group-hover:text-white">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Main visual composition */}
        <div className="relative mt-16 lg:mt-24">
          <motion.div
            initial={{
              clipPath: "inset(12% 0% 12% 0%)",
              opacity: 0.5,
            }}
            whileInView={{
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative h-[440px] overflow-hidden bg-[#D5D0C5] sm:h-[560px] lg:h-[760px]"
          >
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
              }}
              className="absolute -inset-y-20 inset-x-0"
            >
              <Image
                src={philosophyImage}
                alt="Warm modern farmhouse living space with natural oak finishes and architectural details"
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Image gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            {/* Image index */}
            <div className="absolute top-7 left-7 flex items-center gap-3 text-white sm:top-10 sm:left-10">
              <span className="h-px w-8 bg-white/70" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
                A different way to live
              </span>
            </div>

            {/* Bottom image caption */}
            <div className="absolute right-7 bottom-8 left-7 flex items-end justify-between gap-6 text-white sm:right-10 sm:bottom-10 sm:left-10">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/70">
                  The philosophy
                </span>
                <p className="mt-2 font-serif text-2xl italic sm:text-4xl">
                  Living, beautifully.
                </p>
              </div>

              <span className="hidden text-xs tracking-[0.16em] sm:block">
                01 — 03
              </span>
            </div>
          </motion.div>

          {/* Floating editorial note */}
          <motion.div
            style={{ y: floatingY }}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-20 -mt-12 ml-auto w-[88%] bg-[#E6E3D9] px-7 py-9 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:-mt-20 sm:w-[70%] sm:p-10 lg:-mt-28 lg:mr-12 lg:w-[430px] lg:p-12"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A8175]">
              Thoughtfully considered
            </span>

            <h3 className="mt-5 font-serif text-3xl leading-[1.15] tracking-[-0.04em] sm:text-4xl">
              The beauty is
              <br />
              <em className="font-normal text-[#8B947D]">
                in the details.
              </em>
            </h3>

            <div className="mt-7 h-px w-full bg-[#252A24]/15" />

            <p className="mt-6 text-sm leading-[1.9] text-[#60665D]">
              Every texture, every material, every quiet
              corner — carefully brought together to
              create a home that feels naturally yours.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A8175]">
                Form & feeling
              </span>
              <MoveUpRight size={19} strokeWidth={1.2} />
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 grid gap-8 border-t border-[#252A24]/20 pt-9 md:mt-24 md:grid-cols-[1fr_2fr] md:gap-16 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A8175]">
              Our perspective
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[900px] font-serif text-[clamp(1.8rem,3.2vw,3.7rem)] leading-[1.25] tracking-[-0.035em]"
          >
            Because the most meaningful spaces aren't
            simply designed to be seen.
            <span className="italic text-[#8B947D]">
              {" "}They're designed to be felt.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

