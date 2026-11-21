"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Search,
  X,
  MoveUpRight,
  MapPin,
  Mail,
  Sparkles,
  Sun,
} from "lucide-react";
import PropertyScrollTour from "./PropertyScrollTour";
import Manifesto from "./Manifesto";
import PropertyShowcase from "./PropertyShowcase";
import Header from "./Header";
import Footer from "./Footer";

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

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90";

const philosophyImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90";

const cinematicImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90";

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`forma-eyebrow ${light ? "is-light" : ""}`}>
      <span className="forma-eyebrow-dot" />
      {children}
    </div>
  );
}

function MagneticArrow() {
  return (
    <span className="forma-magnetic-arrow">
      <ArrowUpRight size={17} />
    </span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 45,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}



function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = useMemo(
    () => [heroImage, ...properties.map((property) => property.image)],
    [],
  );

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#11120f] text-[#f4f1eb]"
    >
      {/* ================= BACKGROUND SLIDESHOW ================= */}
      <motion.div
        className="absolute inset-0"
        style={
          reduceMotion
            ? undefined
            : {
                scale: imageScale,
                y: imageY,
              }
        }
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 2, ease: "linear" },
            }}
          >
            <Image
              src={heroSlides[activeSlide]}
              alt="FORMA architectural residence"
              fill
              priority={activeSlide === 0}
              unoptimized
              sizes="100vw"
              className="forma-hero-image object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ================= CINEMATIC OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e0c]/85 via-[#0d0e0c]/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e0c]/80 via-transparent to-[#0d0e0c]/20" />

      {/* ================= VERTICAL FRAME ================= */}
      <div className="pointer-events-none absolute inset-5 border border-white/[0.12] sm:inset-8 lg:inset-10" />

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
              }
        }
        className="relative z-10 flex min-h-[100svh] flex-col justify-between px-7 pb-28 pt-36 sm:px-12 sm:pb-32 sm:pt-40 lg:px-20 lg:pb-36 lg:pt-44"
      >
        {/* TOP EDITORIAL LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-start justify-between gap-5"
        >
          <div className="flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 sm:text-[11px]">
              Independent living, considered differently
            </span>

            <span className="h-px w-12 bg-[#c8aa73]" />
          </div>

          <div className="hidden text-right sm:block">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-white/55">
              Est. 2024
            </span>

            <span className="mt-2 block text-[10px] tracking-widest text-white/35">
              Portugal · Spain · Beyond
            </span>
          </div>
        </motion.div>

        {/* CENTRAL EDITORIAL TITLE */}
        <div className="relative my-auto py-16">
          <div className="max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3 sm:mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa73]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/65 sm:text-xs">
                Spaces beyond the ordinary
              </span>
            </motion.div>

            <h1 className="flex flex-col text-[clamp(4.5rem,13vw,12.5rem)] font-light leading-[0.78] tracking-[-0.095em]">
              <motion.span
                initial={reduceMotion ? undefined : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Find your
              </motion.span>

              <motion.span
                initial={reduceMotion ? undefined : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-3 block pl-[8%] sm:mt-5 sm:pl-[12%]"
              >
                <span className="font-serif italic text-[#e5c995]">
                  somewhere.
                </span>
              </motion.span>
            </h1>

            {/* Supporting copy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="mt-10 flex flex-col gap-7 sm:mt-14 sm:flex-row sm:items-end sm:justify-between sm:pl-[12%]"
            >
              <p className="max-w-[340px] text-sm font-light leading-7 text-white/65 sm:text-base sm:leading-8">
                Not just a place to live.
                <br />A place that feels like it was always yours.
              </p>

              <Link
                href="/residences"
                className="group flex w-fit items-center gap-5 border border-white/30 bg-white/[0.04] py-3 pl-5 pr-3 backdrop-blur-sm transition-all duration-500 hover:border-[#e5c995] hover:bg-[#e5c995] hover:text-[#11120f]"
              >
                <span className="text-[10px] uppercase tracking-[0.18em] text-white transition-colors group-hover:text-[#11120f] sm:text-xs">
                  Explore the residences
                </span>

                <span className="flex h-10 w-10 items-center justify-center bg-white text-[#11120f] transition-all duration-500 group-hover:bg-[#11120f] group-hover:text-[#e5c995]">
                  <motion.span
                    whileHover={{ rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM EDITORIAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="flex items-end justify-between gap-4 border-t border-white/20 pt-5"
        >
          {/* Brand note */}
          <div className="hidden flex-col gap-2 sm:flex">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Designed around
            </span>

            <span className="text-xs tracking-wide text-white/75">
              Light · Space · Life
            </span>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className="group flex h-8 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: activeSlide === index ? 34 : 12,
                    backgroundColor:
                      activeSlide === index
                        ? "#e5c995"
                        : "rgba(255,255,255,0.45)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-[2px]"
                />
              </button>
            ))}
          </div>

          {/* Slide Count */}
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/65">
            <span className="text-white">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>

            <span className="text-white/30">/</span>

            <span>{String(heroSlides.length).padStart(2, "0")}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ================= FLOATING PROPERTY NOTE ================= */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-36 right-14 z-10 hidden xl:block"
      >
        <div className="flex items-center gap-4 border border-white/15 bg-black/20 p-4 backdrop-blur-xl">
          <div className="h-12 w-12 overflow-hidden">
            <Image
              src={properties[0].image}
              alt="Featured residence"
              width={100}
              height={100}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/45">
              A glimpse of the collection
            </span>

            <span className="mt-1 block font-serif text-lg text-white">
              {properties[0].name}
            </span>
          </div>

          <ArrowUpRight size={15} className="ml-2 text-[#e5c995]" />
        </div>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
          Scroll to discover
        </span>

        <motion.div
          animate={{
            scaleY: [0, 1, 0],
            transformOrigin: ["top", "top", "bottom"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-[#e5c995]"
        />
      </motion.div>
    </section>
  );
}

function CinematicExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.65], [0.78, 1]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.65], [8, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.65], [80, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -80]);

  return (
    <section className="forma-experience" ref={sectionRef}>
      <div className="forma-experience-sticky">
        <motion.div
          className="forma-experience-image"
          style={{
            scale: imageScale,
            rotateX: imageRotateX,
            y: imageY,
          }}
        >
          <Image
            src={cinematicImage}
            alt="An architectural interior designed for calm and connection"
            fill
            unoptimized
            sizes="100vw"
          />
        </motion.div>

        <div className="forma-experience-overlay" />

        <motion.div className="forma-experience-content" style={{ y: textY }}>
          <Eyebrow light>02 / Space & feeling</Eyebrow>

          <h2>
            Designed to
            <br />
            <em>move you.</em>
          </h2>

          <p>
            Spaces that invite you to slow down, look closer, and live
            differently.
          </p>

          <Link href="/residences" className="forma-circle-cta">
            <span>
              Explore
              <br />
              residences
            </span>
            <ArrowUpRight size={21} />
          </Link>
        </motion.div>

        <div className="forma-experience-counter">
          <span>02</span>
          <span className="forma-counter-line" />
          <span>04</span>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  value,
  duration = 2.2,
}: {
  value: string;
  duration?: number;
}) {
  const target = Number(value);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    String(Math.round(latest)).padStart(value.length, "0"),
  );

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, count, target, duration]);

  return (
    <span ref={ref} className="block overflow-hidden font-mono tabular-nums">
      <motion.span className="inline-block" aria-label={value}>
        {rounded}
      </motion.span>
    </span>
  );
}

function Stats() {
  const stats = [
    { number: "24", label: "Considered residences" },
    { number: "09", label: "Design distinctions" },
    { number: "03", label: "Landscapes we call home" },
    { number: "01", label: "Promise for tomorrow" },
  ];

  return (
    <section className="forma-stats relative overflow-hidden px-5 py-24 md:px-10 md:py-32">
      <div className="forma-stats-heading mb-16 flex flex-col gap-5 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>04 / A measure of meaning</Eyebrow>

          <p className="mt-5 max-w-xl text-xl font-light leading-relaxed text-white/70 md:text-2xl">
            Less about how many. More about how it feels.
          </p>
        </div>
      </div>

      <div className="forma-stats-grid grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.1}>
            <div className="forma-stat group flex flex-col items-center border-t border-white/15 pt-6 text-center">
              {/* Animated Number */}
              <div className="forma-stat-number text-4xl font-light tracking-[-0.06em] text-white md:text-6xl lg:text-6xl">
                <AnimatedCounter value={stat.number} duration={2.2} />
              </div>

              {/* Label */}
              <span className="forma-stat-label mt-5 max-w-[190px] text-xs uppercase tracking-[0.16em] leading-relaxed text-white/45 transition-colors duration-500 group-hover:text-white/80">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


function Collection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      properties.filter((property) =>
        `${property.name} ${property.location} ${property.type}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <section
      id="collection"
      className="relative isolate overflow-hidden bg-[#0b0b0a] px-5 py-24 text-[#f2f0e9] sm:px-8 md:py-32 lg:px-12"
    >
      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Architectural grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.12]"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(198,165,107,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198,165,107,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Perspective grid */}
        <div
          className="absolute inset-x-0 bottom-0 h-[65%] opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(198,165,107,0.16) 1px, transparent 1px)",
            backgroundSize: "100% 65px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 35%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 35%, transparent)",
          }}
        />

        {/* Perspective floor */}
        <motion.div
          className="absolute -bottom-[10%] left-[-20%] h-[55%] w-[140%] origin-bottom"
          style={{
            transform: "perspective(600px) rotateX(60deg)",
            backgroundImage: `
              linear-gradient(rgba(198,165,107,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198,165,107,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "0px 90px"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Gold ambient glow - upper right */}
        <motion.div
          className="absolute right-[-15%] top-[5%] h-[450px] w-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,165,107,0.12) 0%, rgba(198,165,107,0.04) 35%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gold ambient glow - lower left */}
        <motion.div
          className="absolute bottom-[15%] left-[-20%] h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(198,165,107,0.10), transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -40, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating gold light */}
        <motion.div
          className="absolute left-[15%] top-[25%] h-1 w-1 rounded-full bg-[#C6A56B]"
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              "0 0 8px rgba(198,165,107,0.3)",
              "0 0 20px rgba(198,165,107,0.9)",
              "0 0 8px rgba(198,165,107,0.3)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[25%] top-[50%] h-1.5 w-1.5 rounded-full bg-[#C6A56B]"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.8, 0.2],
            boxShadow: [
              "0 0 5px rgba(198,165,107,0.2)",
              "0 0 16px rgba(198,165,107,0.7)",
              "0 0 5px rgba(198,165,107,0.2)",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Moving horizontal light beam */}
        <motion.div
          className="absolute left-0 top-[35%] h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(198,165,107,0.25) 50%, transparent 100%)",
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grain-like dark gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/20 via-transparent to-[#0b0b0a]" />
      </div>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative mx-auto max-w-[1600px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end"
        >
          {/* Heading */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              className="mb-8 flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="h-px w-10 bg-[#C6A56B]"
                animate={{
                  width: [40, 65, 40],
                  boxShadow: [
                    "0 0 5px rgba(198,165,107,0.2)",
                    "0 0 15px rgba(198,165,107,0.7)",
                    "0 0 5px rgba(198,165,107,0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Eyebrow>05 / THE COLLECTION</Eyebrow>

              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-[#C6A56B]"
                  animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <span className="relative h-2 w-2 rounded-full bg-[#C6A56B] shadow-[0_0_10px_rgba(198,165,107,0.8)]" />
              </span>
            </motion.div>

            {/* Animated title */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.88] tracking-[-0.075em]"
              >
                Spaces that
              </motion.h2>
            </div>

            <div className="overflow-hidden pb-2">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.88] tracking-[-0.075em]"
              >
                <motion.span
                  className="font-serif italic text-[#C6A56B]"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(198,165,107,0.10)",
                      "0 0 25px rgba(198,165,107,0.25)",
                      "0 0 5px rgba(198,165,107,0.10)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  stay with you.
                </motion.span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              A collection of exceptional places, thoughtfully chosen for the
              way they make you feel, live, and belong.
            </motion.p>
          </div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative flex w-full items-center border-b border-white/15 transition-all duration-500 focus-within:border-[#C6A56B] focus-within:shadow-[0_8px_25px_-12px_rgba(198,165,107,0.3)] lg:max-w-[340px]"
          >
            {/* Search glow */}
            <motion.div
              className="pointer-events-none absolute -bottom-px left-0 h-px bg-[#C6A56B]"
              initial={{ width: "0%" }}
              animate={{ width: query ? "100%" : "0%" }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 0 10px rgba(198,165,107,0.6)",
              }}
            />

            <Search
              size={17}
              strokeWidth={1.5}
              className="shrink-0 text-[#C6A56B] transition-all duration-300 group-focus-within:drop-shadow-[0_0_8px_rgba(198,165,107,0.7)]"
            />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Discover a residence..."
              aria-label="Search residences"
              className="w-full bg-transparent px-4 py-5 text-sm text-white outline-none placeholder:text-white/30"
            />

            <AnimatePresence>
              {query && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6A56B]/20 text-[#C6A56B] transition-all duration-300 hover:border-[#C6A56B]/60 hover:bg-[#C6A56B]/10 hover:shadow-[0_0_15px_rgba(198,165,107,0.15)]"
                >
                  <X size={16} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* COLLECTION INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 flex items-center justify-between border-y border-white/10 py-5"
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs">
              Curated residences
            </span>

            <motion.span
              className="h-1 w-1 rounded-full bg-[#C6A56B]"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(198,165,107,0.2)",
                  "0 0 12px rgba(198,165,107,0.9)",
                  "0 0 0px rgba(198,165,107,0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          <motion.span
            key={filtered.length}
            initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-xs tabular-nums text-white/40"
          >
            {String(filtered.length).padStart(2, "0")}{" "}
            <span className="text-[#C6A56B]/50">/</span>{" "}
            {String(properties.length).padStart(2, "0")} residences
          </motion.span>
        </motion.div>

        {/* ================================================= */}
        {/* PROPERTY GRID */}
        {/* ================================================= */}

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((property, index) => (
              <motion.div
                layout
                key={property.slug}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                  scale: 0.94,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.75,
                  delay: Math.min(index * 0.1, 0.35),
                  ease: [0.22, 1, 0.36, 1],
                  layout: {
                    duration: 0.5,
                  },
                }}
                className="group relative"
              >
                <Link
                  href={`/residences/${property.slug}`}
                  className="relative block"
                >
                  {/* Card glow behind */}
                  <div className="absolute -inset-px rounded-sm bg-[#C6A56B]/0 opacity-0 blur-xl transition-all duration-700 group-hover:bg-[#C6A56B]/15 group-hover:opacity-100" />

                  {/* IMAGE */}
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.04] bg-[#171714] transition-all duration-700 group-hover:border-[#C6A56B]/30">

                    {/* Property image */}
                    <motion.img
                      src={property.image}
                      alt={property.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.09 }}
                      transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/15 transition-all duration-700 group-hover:from-black/70 group-hover:via-black/5" />

                    {/* Gold cinematic light sweep */}
                    <motion.div
                      className="pointer-events-none absolute inset-y-0 left-[-100%] w-[60%] skew-x-[-20deg]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(198,165,107,0.13), rgba(255,235,190,0.08), transparent)",
                      }}
                      whileHover={{
                        left: "150%",
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Subtle vignette */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-60"
                      style={{
                        background:
                          "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />

                    {/* Top metadata */}
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">

                      {/* Property type */}
                      <motion.span
                        className="border border-white/25 bg-black/25 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md transition-all duration-500 group-hover:border-[#C6A56B]/50 group-hover:text-[#E3C58B] sm:text-[10px]"
                      >
                        {property.type}
                      </motion.span>

                      {/* Property index */}
                      <span className="text-xs tracking-widest text-white/70 transition-colors duration-500 group-hover:text-[#C6A56B]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Hover corner brackets */}
                    <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-[#C6A56B]/0 transition-all duration-500 group-hover:left-3 group-hover:top-3 group-hover:border-[#C6A56B]/70 sm:left-6 sm:top-6" />

                    <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#C6A56B]/0 transition-all duration-500 group-hover:bottom-3 group-hover:right-3 group-hover:border-[#C6A56B]/70 sm:bottom-6 sm:right-6" />

                    {/* Location and content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                      {/* Location */}
                      <div className="mb-4 flex items-center gap-2 text-white/65 transition-colors duration-500 group-hover:text-[#E3C58B]">
                        <MapPin
                          size={13}
                          strokeWidth={1.5}
                          className="transition-all duration-500 group-hover:drop-shadow-[0_0_6px_rgba(198,165,107,0.8)]"
                        />

                        <span className="text-[10px] uppercase tracking-[0.2em] sm:text-xs">
                          {property.location}
                        </span>
                      </div>

                      {/* Property title and price */}
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-3xl font-normal tracking-[-0.04em] text-white transition-colors duration-500 group-hover:text-[#F3E5C5] sm:text-4xl lg:text-5xl">
                            {property.name}
                          </h3>

                          <p className="mt-3 text-sm font-light tracking-wide text-white/65 transition-colors duration-500 group-hover:text-[#C6A56B]">
                            {property.price}
                          </p>
                        </div>

                        {/* Animated arrow */}
                        <motion.div
                          className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-[#C6A56B] group-hover:bg-[#C6A56B] group-hover:text-[#0b0b0a] group-hover:shadow-[0_0_25px_rgba(198,165,107,0.35)]"
                          whileHover={{
                            rotate: 45,
                            scale: 1.12,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          <ArrowUpRight size={19} strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      {/* Gold reveal line */}
                      <div className="mt-6 h-px w-full bg-white/20">
                        <motion.div
                          className="h-full bg-[#C6A56B]"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{
                            boxShadow:
                              "0 0 10px rgba(198,165,107,0.45)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================================================= */}
        {/* EMPTY STATE */}
        {/* ================================================= */}

        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="flex min-h-[350px] flex-col items-center justify-center text-center"
            >
              {/* Search icon glow */}
              <motion.div
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A56B]/20 bg-[#C6A56B]/[0.04]"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(198,165,107,0.0)",
                    "0 0 30px rgba(198,165,107,0.12)",
                    "0 0 0px rgba(198,165,107,0.0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Search
                  size={27}
                  strokeWidth={1}
                  className="text-[#C6A56B]/70"
                />
              </motion.div>

              <h3 className="font-serif text-3xl font-light text-white">
                Nothing found.
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Try searching another location or residence.
              </p>

              <motion.button
                onClick={() => setQuery("")}
                whileHover={{
                  color: "#E3C58B",
                  textShadow: "0 0 10px rgba(198,165,107,0.3)",
                }}
                className="mt-6 border-b border-[#C6A56B] pb-1 text-xs uppercase tracking-[0.2em] text-[#C6A56B]"
              >
                Clear your search
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center md:mt-24"
        >
          {/* Background gold light */}
          <motion.div
            className="pointer-events-none absolute left-[-10%] top-0 h-[150px] w-[300px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(198,165,107,0.07), transparent 70%)",
              filter: "blur(35px)",
            }}
            animate={{
              x: [0, 50, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              Find your next chapter
            </p>

            <p className="mt-3 text-sm font-light text-white/65">
              Somewhere extraordinary is waiting.
            </p>
          </div>

          {/* CTA button */}
          <Link
            href="/residences"
            className="group relative inline-flex items-center gap-5 overflow-hidden border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.18em] text-white transition-all duration-500 hover:border-[#C6A56B] hover:text-[#0b0b0a]"
          >
            {/* Button background animation */}
            <motion.span
              className="absolute inset-0 origin-left bg-[#C6A56B]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0b0b0a]">
              Explore all residences
            </span>

            <motion.span
              className="relative z-10"
              whileHover={{
                x: 5,
                rotate: 45,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-20 h-px w-full origin-left bg-gradient-to-r from-[#C6A56B]/40 via-[#C6A56B]/10 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="forma-journal">
      <div className="forma-journal-image">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
          alt="A thoughtfully designed contemporary interior"
          fill
          unoptimized
          sizes="(max-width: 800px) 100vw, 55vw"
        />
      </div>

      <div className="forma-journal-content">
        <Eyebrow>06 / Notes on living</Eyebrow>

        <h2>
          The quiet
          <br />
          luxury of
          <br />
          <em>enough.</em>
        </h2>

        <p>
          On choosing less, noticing more, and creating space for the things
          that matter.
        </p>

        <Link href="/journal" className="forma-journal-link">
          Explore our journal
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#08090d] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE                              */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Neon ambient glow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C6A56B]/10 blur-[130px] sm:h-[700px] sm:w-[700px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/15 blur-[140px] sm:h-[650px] sm:w-[650px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#08090d_80%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        {/* ================================================= */}
        {/* HEADER                                             */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                opacity: [1, 0.4, 1],
                boxShadow: [
                  "0 0 5px #C6A56B",
                  "0 0 15px #C6A56B",
                  "0 0 5px #C6A56B",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#C6A56B]"
            />

            <span className="text-[10px] tracking-[0.3em] text-white/50 sm:text-xs">
              07 / CONNECTION POINT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C6A56B]/40" />

            <span className="text-[10px] tracking-[0.2em] text-white/35">
              GOOD THINGS START HERE
            </span>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* MAIN CONTENT                                       */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-28">
          {/* LEFT */}
          <div className="relative">
            {/* Small floating label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <Sparkles size={15} className="text-[#C6A56B]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Let&apos;s make something meaningful
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(4rem,11vw,10rem)] font-light leading-[0.88] tracking-[-0.085em]"
            >
              Let&apos;s make
              <br />
              <span className="relative inline-block font-serif italic text-[#C6A56B]">
                a connection.
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute -bottom-3 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#C6A56B] via-[#C6A56B]/60 to-transparent"
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 max-w-lg text-sm leading-8 text-white/50 sm:text-base sm:leading-9"
            >
              Have a property in mind? A big idea? Or just want to see what
              happens when good design meets the right people?
              <span className="text-white/80"> We&apos;re all ears.</span>
            </motion.p>

            {/* Neon tag */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                type: "spring",
              }}
              className="mt-10 inline-flex items-center gap-3 border border-[#C6A56B]/30 bg-[#C6A56B]/[0.05] px-4 py-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#C6A56B] shadow-[0_0_10px_#C6A56B]" />

              <span className="text-[10px] tracking-[0.16em] text-[#C6A56B]">
                NO ROBOTS. JUST REAL PEOPLE.
              </span>
            </motion.div>

            {/* Decorative orbital element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-4 top-0 hidden h-32 w-32 rounded-full border border-dashed border-[#C6A56B]/20 xl:block"
            >
              <div className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-[#C6A56B] shadow-[0_0_15px_#C6A56B]" />
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* RIGHT - CONTACT PANEL                              */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[#C6A56B]/[0.04] blur-2xl" />

            {/* Main card */}
            <div className="relative overflow-hidden border border-white/10 bg-[#11131a]/90 p-6 backdrop-blur-2xl sm:p-9 lg:p-10">
              {/* Animated border accent */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
                className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#C6A56B] to-transparent"
              />

              {/* Card header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-[#C6A56B]">
                    INCOMING TRANSMISSION
                  </p>

                  <p className="mt-2 text-lg font-light tracking-wide text-white">
                    Tell us what&apos;s on your mind.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A56B]/20 bg-[#C6A56B]/5">
                  <Mail size={17} className="text-[#C6A56B]" />
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  const formData = new FormData(event.currentTarget);
                  const email = String(formData.get("email") || "");

                  const subject = "A little hello to FORMA";

                  const body = `Hello FORMA,\n\nI'd love to start a conversation about your residences.\n\nYou can reach me at: ${email}\n\nLooking forward to hearing from you.`;

                  window.location.href = `mailto:hello@forma.homes?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                  setSent(true);
                }}
                className="mt-8"
              >
                <label
                  htmlFor="forma-contact-email"
                  className="mb-4 block text-xs text-white/40"
                >
                  Your email address
                </label>

                <div className="group flex items-center border-b border-white/15 transition-colors duration-500 focus-within:border-[#C6A56B]">
                  <input
                    id="forma-contact-email"
                    type="email"
                    name="email"
                    placeholder="name@somewhere.com"
                    required
                    className="min-w-0 flex-1 bg-transparent py-5 text-sm text-white outline-none placeholder:text-white/20 sm:text-base"
                  />

                  <motion.button
                    type="submit"
                    aria-label="Send enquiry"
                    whileHover={{ scale: 1.08, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center bg-[#C6A56B] text-[#08090d] shadow-[0_0_20px_rgba(196,255,77,0.15)] transition-shadow hover:shadow-[0_0_30px_rgba(196,255,77,0.4)]"
                  >
                    <ArrowUpRight size={20} />
                  </motion.button>
                </div>

                {/* Feedback */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={sent ? "sent" : "idle"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`mt-5 text-xs leading-6 ${
                      sent ? "text-[#C6A56B]" : "text-white/30"
                    }`}
                    aria-live="polite"
                  >
                    {sent
                      ? "Your mail app should be opening. We'll take it from there. ✳"
                      : "We reply personally. Usually before your coffee gets cold."}
                  </motion.p>
                </AnimatePresence>
              </form>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Email details */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Prefer a direct line?
                  </p>

                  <a
                    href="mailto:hello@forma.homes"
                    className="mt-2 inline-block text-sm text-white/80 transition-colors hover:text-[#C6A56B]"
                  >
                    hello@forma.homes
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[9px] tracking-[0.15em] text-[#C6A56B]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C6A56B] shadow-[0_0_8px_#C6A56B]" />
                  AVAILABLE FOR CONVERSATIONS
                </div>
              </div>

              {/* Card bottom decoration */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 overflow-hidden">
                <div className="absolute -bottom-10 -right-10 h-20 w-20 rotate-45 border border-[#C6A56B]/10" />
              </div>
            </div>

            {/* Card footer */}
            <div className="mt-5 flex items-center justify-between text-[9px] tracking-[0.15em] text-white/25">
              <span>SECURE CHANNEL · FORMA</span>
              <span>EST. 2024</span>
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM STRIP                                       */}
        {/* ================================================= */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-gradient-to-r from-[#C6A56B]/50 via-white/10 to-transparent"
        />

        <div className="flex flex-col gap-4 py-7 text-[9px] tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>DESIGNED TO BELONG. BUILT TO FEEL DIFFERENT.</span>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 text-[#C6A56B]/70"
          >
            <Sparkles size={12} />
            GOOD ENERGY ONLY
          </motion.div>
        </div>
      </div>
    </section>
  );
}



export function FormaHome() {
  const pageRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="forma-home-new" ref={pageRef}>
      <motion.div
        className="forma-scroll-progress"
        style={{ scaleX: progressScale }}
      />
      <Hero />
      <PropertyScrollTour />
      <Manifesto />
      <CinematicExperience />
      <PropertyShowcase />
      <Stats />
      <Collection />
      <Journal />
      <Contact />
      
    </main>
  );
}
