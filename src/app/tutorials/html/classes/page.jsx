import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlClasses } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML Classes',
  description: 'Learn how to use HTML classes to specify a class for HTML elements and apply styles',
};

export default function HTMLClassesPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlClasses} />
    </MainLayout>
  );
} 