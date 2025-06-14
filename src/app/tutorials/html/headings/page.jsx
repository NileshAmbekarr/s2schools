import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlHeadings } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Headings Tutorial | S2Schools',
  description: 'Learn about HTML headings and how to use them to structure your web pages.',
};

export default function HTMLHeadingsPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlHeadings} />
    </MainLayout>
  );
} 