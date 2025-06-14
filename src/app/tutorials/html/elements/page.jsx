import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlElements } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Elements Tutorial | S2Schools',
  description: 'Learn about HTML elements, the building blocks of HTML pages.',
};

export default function HTMLElementsPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlElements} />
    </MainLayout>
  );
} 