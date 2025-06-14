import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlParagraphs } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Paragraphs Tutorial | S2Schools',
  description: 'Learn about HTML paragraphs and how to create and format text in your web pages.',
};

export default function HTMLParagraphsPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlParagraphs} />
    </MainLayout>
  );
} 