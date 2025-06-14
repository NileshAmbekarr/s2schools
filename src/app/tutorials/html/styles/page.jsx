import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlStyles } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Styles Tutorial | S2Schools',
  description: 'Learn about HTML styles and how to add colors, fonts, and other styling to your web pages.',
};

export default function HTMLStylesPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlStyles} />
    </MainLayout>
  );
} 