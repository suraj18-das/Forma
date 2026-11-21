import type { Metadata } from "next";

import { SiteFrame } from "@/components/site-chrome";
import { StudioPage } from "@/components/StudioPage";
export const metadata: Metadata = {
  title: "Our Studio | FORMA",
  description:
    "Meet the FORMA studio and the values behind our thoughtful residences.",
};
export default function Page() {
  return (
    
      <StudioPage />
  );
}
