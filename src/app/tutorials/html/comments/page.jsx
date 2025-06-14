import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlComments } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Comments Tutorial | S2Schools',
  description: 'Learn how to add comments to your HTML code for documentation and debugging purposes.',
};

export default function HTMLCommentsPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlComments} />
    </MainLayout>
  );
} 