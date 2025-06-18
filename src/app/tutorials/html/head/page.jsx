import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlHead } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML <head> Element',
  description: 'Learn about the HTML <head> element and its contents including title, meta, link, style, script, and base elements.'
};

export default function HTMLHeadPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlHead} />
    </MainLayout>
  );
} 