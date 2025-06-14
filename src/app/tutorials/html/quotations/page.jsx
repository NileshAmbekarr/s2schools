import MainLayout from '@/components/layout/MainLayout';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlQuotations } from '@/data/tutorials/html';

export const metadata = {
  title: 'HTML Quotations Tutorial | S2Schools',
  description: 'Learn about HTML quotation elements like blockquote, q, abbr, address, cite, and bdo.',
};

export default function HTMLQuotationsPage() {
  return (
    <MainLayout>
      <TutorialContent {...htmlQuotations} />
    </MainLayout>
  );
} 