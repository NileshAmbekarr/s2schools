import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlJavaScript } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML JavaScript',
  description: 'Learn how to use JavaScript to make HTML pages more dynamic and interactive',
};

export default function HTMLJavaScriptPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlJavaScript} />
    </MainLayout>
  );
} 