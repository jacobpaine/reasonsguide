import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LESSONS, getLesson } from "@/content/curriculum";
import { LessonFlow } from "@/components/lesson/LessonFlow";

/** Static export: pre-render one page per lesson, drafts included. */
export function generateStaticParams() {
  return LESSONS.map((lesson) => ({ id: lesson.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const lesson = getLesson(id);
  return { title: lesson ? lesson.title : "Lesson" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  return <LessonFlow lessonId={lesson.id} />;
}
