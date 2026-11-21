import type { Metadata } from "next";
import { residences } from "@/lib/forma-data";
import { PropertyTourPage } from "@/components/PropertyTourPage";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return residences.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = residences.find((item) => item.slug === slug);
  return {
    title: property ? `${property.name} | FORMA` : "Residence | FORMA",
    description: property?.description ?? "Explore FORMA residences.",
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
      <PropertyTourPage slug={slug} />
  );
}
