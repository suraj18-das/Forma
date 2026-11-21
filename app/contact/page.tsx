import { ContactPage } from "@/components/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | FORMA",
  description:
    "Talk with the FORMA studio about a residence or arrange a private visit.",
};
export default function Page() {
  return (
      <ContactPage />
  );
}
