"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    image: "/exterior.png",
    eyebrow: "THE FIRST IMPRESSION",
    title: "A place to\ncall home.",
    description: "Timeless farmhouse architecture, beautiful landscaping, and a warm welcome.",
    location: "The exterior",
  },
  {
    image: "/entry.png",
    eyebrow: "STEP INSIDE",
    title: "Where every\nwelcome matters.",
    description: "Natural oak finishes, elegant lighting, and a welcoming entrance.",
    location: "The entrance",
  },
  {
    image: "/living-room.png",
    eyebrow: "THE HEART OF HOME",
    title: "Space to live.\nRoom to breathe.",
    description: "Vaulted ceilings, a beautiful stone fireplace, and inviting spaces to gather.",
    location: "The living room",
  },
  {
    image: "/kitchen.png",
    eyebrow: "MADE FOR EVERYDAY",
    title: "A kitchen that\nbrings it all together.",
    description: "Warm white cabinetry, quartz countertops, and a spacious central island.",
    location: "The kitchen",
  },
  {
    image: "/bedroom.png",
    eyebrow: "YOUR PRIVATE RETREAT",
    title: "Find your\nquiet moment.",
    description: "Soft natural light, calming textures, and comfort in every detail.",
    location: "The primary bedroom",
  },
  {
    image: "/study-office.png",
    eyebrow: "WORK BEAUTIFULLY",
    title: "A space to\nfocus and create.",
    description: "A thoughtfully designed home office with natural light and timeless finishes.",
    location: "The study & home office",
  },
  {
    image: "/garrage.png",
    eyebrow: "EVERYDAY CONVENIENCE",
    title: "More than\njust parking.",
    description: "A spacious two-car garage with organized storage and practical design.",
    location: "The two-car garage",
  },
];

export default function PropertyScrollTour() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current;
      const contents = contentRefs.current;

      // Initial scene
      gsap.set(images, {
        opacity: 0,
        scale: 1.15,
      });

      gsap.set(contents, {
        opacity: 0,
        y: 50,
      });

      gsap.set(images[0], {
        opacity: 1,
        scale: 1.1,
      });

      gsap.set(contents[0], {
        opacity: 1,
        y: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=9000",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scenes.forEach((scene, index) => {
        const image = images[index];
        const content = contents[index];

        if (!image || !content) return;

        // Cinematic camera movement
        timeline.to(
          image,
          {
            scale: 1,
            duration: 1,
            ease: "none",
          },
          index
        );

        // Fade the current scene away
        if (index < scenes.length - 1) {
          timeline.to(
            image,
            {
              opacity: 0,
              duration: 0.25,
              ease: "power1.in",
            },
            index + 0.75
          );

          timeline.to(
            content,
            {
              opacity: 0,
              y: -35,
              duration: 0.2,
            },
            index + 0.75
          );
        }

        // Reveal the next scene
        if (index > 0) {
          timeline.to(
            image,
            {
              opacity: 1,
              duration: 0.25,
              ease: "power1.out",
            },
            index
          );

          timeline.to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            index + 0.08
          );
        }
      });

      // Scroll progress indicator
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=9000",
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#101010] text-white"
    >
      {/* Cinematic scene */}
      <div className="absolute inset-0">
        {scenes.map((scene, index) => (
          <div
            key={scene.image}
            ref={(el) => {
              if (el) imageRefs.current[index] = el;
            }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={scene.image}
              alt={scene.location}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Top navigation */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] uppercase"
        >
          Estate<span className="text-white/50">.</span>
        </Link>

        <div className="hidden text-xs tracking-[0.2em] text-white/70 md:block">
          PROPERTY EXPERIENCE
        </div>

        <Link
          href="/contact"
          className="group flex items-center gap-2 border border-white/30 px-5 py-3 text-xs uppercase tracking-wider backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          Enquire
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Scene content */}
      <div className="relative z-20 h-full">
        {scenes.map((scene, index) => (
          <div
            key={scene.title}
            ref={(el) => {
              if (el) contentRefs.current[index] = el;
            }}
            className="absolute inset-0 flex items-end px-6 pb-28 md:px-16 md:pb-32 lg:px-24"
          >
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-medium tracking-[0.35em] text-white/70 md:text-sm">
                {scene.eyebrow}
              </p>

              <h1 className="whitespace-pre-line text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[100px]">
                {scene.title}
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 md:text-base">
                {scene.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-white/50" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  {scene.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-7 left-6 right-6 z-30 flex items-end justify-between md:left-12 md:right-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll to explore
          </p>

          <ArrowDown
            size={18}
            className="mt-3 animate-bounce text-white/80"
          />
        </div>

        <div className="text-right">
          <p className="text-xs tracking-widest text-white/70">
            01 — 09
          </p>
        </div>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 right-0 z-40 h-[2px] bg-white/20">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-white"
        />
      </div>
    </section>
  );
}