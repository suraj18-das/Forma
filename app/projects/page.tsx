import { ProjectsPage } from "@/components/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | FORMA",
  description:
    "Follow the FORMA process from first idea to a place that belongs.",
};
export default function Page() {
  return (
      <ProjectsPage />
  );
}
