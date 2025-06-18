import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlFilePaths } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML File Paths',
  description: 'Learn how to use file paths to link to external resources like web pages, images, and stylesheets',
};

export default function HTMLFilePathsPage() {
  return (
    <MainLayout>
      <TutorialContent tutorial={htmlFilePaths} />
    </MainLayout>
  );
} 