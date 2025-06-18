import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlId } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML id Attribute',
  description: 'Learn how to use the HTML id attribute to specify a unique identifier for HTML elements',
};

export default function HTMLIdPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlId} />
    </MainLayout>
  );
} 