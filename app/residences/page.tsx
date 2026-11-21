import type { Metadata } from "next";

import { SiteFrame } from "@/components/site-chrome";
import { ResidencesPage } from "@/components/ResidencesPage";
export const metadata: Metadata = {
  title: "Residences | FORMA",
  description:
    "Explore FORMA residences, thoughtfully designed to belong to their landscapes.",
};
export default function Page() {
  return (
      <ResidencesPage />
  );
}
