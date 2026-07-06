import type { Metadata } from "next";
import { PracticeSetupView } from "@/components/practice/PracticeSetupView";

export const metadata: Metadata = { title: "Practice" };

export default function PracticePage() {
  return <PracticeSetupView />;
}
