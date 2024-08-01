/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Prose } from "@/components/mdx/Prose";

type Question = {
  id: string;
  heading: string;
  text: string;
};

export default function Question({ question }: { question: Question }) {
  if (!question) return null;
  return (
    <>
      <header>
        <h3 className="text-xl font-medium text-brand-50 dark:text-brand-50">
          {question?.heading}
        </h3>
      </header>
      <Prose className="mx-auto">
        <p className="text-base text-brand-50 dark:text-brand-50">
          {question?.text}
        </p>
      </Prose>
    </>
  );
}
