import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlDiv } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML <div> Element',
  description: 'Learn how to use the HTML div element as a container for other HTML elements',
};

export default function HTMLDivPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlDiv} />
    </MainLayout>
  );
}