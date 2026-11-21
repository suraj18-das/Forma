"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { ScrollReveal, ImageReveal } from "@/components/scroll-reveal";
import { projects, residences, type TourStop } from "@/lib/forma-data";

const widePhoto =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85";

function PageHero({
  label,
  title,
  lead,
  image = widePhoto,
}: {
  label: string;
  title: ReactNode;
  lead: string;
  image?: string;
}) {
  return (
    <section className="route-hero">
      <Image
        src={image}
        alt="Architecture in its natural setting"
        fill
        priority
        unoptimized
        sizes="100vw"
      />
      <div className="route-hero-shade" />
      <div className="route-hero-copy">
        <span className="eyebrow">{label}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
      <a className="route-hero-scroll" href="#page-content">
        Explore <ArrowDown size={14} />
      </a>
    </section>
  );
}




function TourChapter({
  stop,
  index,
  total,
}: {
  stop: TourStop;
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;
  const nextStop = `#tour-${String(index + 2).padStart(2, "0")}`;
  return (
    <section
      className={`tour-chapter ${index % 2 ? "tour-chapter-reverse" : ""}`}
      id={`tour-${String(index + 1).padStart(2, "0")}`}
    >
      <div className="tour-chapter-image">
        <Image
          src={stop.image}
          alt={stop.alt}
          fill
          unoptimized
          sizes="(max-width: 760px) 100vw, 60vw"
        />
      </div>
      <ScrollReveal className="tour-chapter-copy">
        <span className="eyebrow">{stop.chapter}</span>
        <h3>{stop.title}</h3>
        <p>{stop.description}</p>
        <a href={isLast ? "#tour-finish" : nextStop} className="chapter-next">
          {isLast ? "Finish the visit" : "Continue through the home"}{" "}
          <ArrowDown size={14} />
        </a>
      </ScrollReveal>
    </section>
  );
}




