import type { Metadata } from "next";
import { SessionView } from "@/components/practice/SessionView";

export const metadata: Metadata = { title: "Practice session" };

export default function PracticeSessionPage() {
  return <SessionView />;
}
