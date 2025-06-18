import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlLayout } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML Layout',
  description: 'Learn about HTML layout techniques to create attractive webpage designs.'
};

export default function HTMLLayoutPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlLayout} />
    </MainLayout>
  );
} 