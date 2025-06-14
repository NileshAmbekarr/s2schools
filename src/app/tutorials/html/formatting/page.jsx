import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlFormatting } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Formatting Tutorial | S2Schools',
  description: 'Learn about HTML formatting elements for bold, italic, subscript, superscript, and other text styling.',
};

export default function HTMLFormattingPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlFormatting} />
    </MainLayout>
  );
}