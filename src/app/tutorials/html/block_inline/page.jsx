import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlBlockInline } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML Block and Inline Elements',
  description: 'Learn about HTML block and inline elements and how they affect page layout',
};

export default function HTMLBlockInlinePage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlBlockInline} />
    </MainLayout>
  );
} 