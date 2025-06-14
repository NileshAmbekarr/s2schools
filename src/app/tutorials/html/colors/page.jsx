import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlColors } from '@/data/htmlTutorials';

export const metadata = {
  title: 'HTML Colors Tutorial | S2Schools',
  description: 'Learn about HTML colors, including color names, RGB, HEX, HSL, and opacity values.',
};

export default function HTMLColorsPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlColors} />
    </MainLayout>
  );
} 