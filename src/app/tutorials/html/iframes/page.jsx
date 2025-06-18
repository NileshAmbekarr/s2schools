import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlIframes } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML Iframes',
  description: 'Learn how to use HTML iframes to display a web page within a web page',
};

export default function HTMLIframesPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlIframes} />
    </MainLayout>
  );
} 