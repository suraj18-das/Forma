import type { Metadata } from "next";

import { SiteFrame } from "@/components/site-chrome";
import { JournalPage } from "@/components/JournalPage";
export const metadata: Metadata = {
  title: "Journal | FORMA",
  description: "Notes on architecture, place and the everyday art of living.",
};
export default function Page() {
  return (
      <JournalPage />
  );
}
