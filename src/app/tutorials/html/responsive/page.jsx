import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlResponsive } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML Responsive Web Design',
  description: 'Learn how to create websites that work well on all devices, from desktop computers to mobile phones.'
};

export default function HTMLResponsivePage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlResponsive} />
    </MainLayout>
  );
} 