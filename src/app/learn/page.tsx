import type { Metadata } from "next";
import { CurriculumView } from "@/components/curriculum/CurriculumView";

export const metadata: Metadata = { title: "Learn" };

export default function LearnPage() {
  return <CurriculumView />;
}
