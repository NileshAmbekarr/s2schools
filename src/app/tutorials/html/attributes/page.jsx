import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlAttributes } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Attributes Tutorial | S2Schools',
  description: 'Learn about HTML attributes and how they provide additional information about HTML elements.',
};

export default function HTMLAttributesPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlAttributes} />
    </MainLayout>
  );
} 