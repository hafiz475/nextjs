// app/page.tsx
import SectionOne from '@/components/quoteMind/Section1';
import SectionTwo from '@/components/quoteMind/Section2';
import SectionThree from '@/components/quoteMind/Section3';

export default function Home() {
  return (
    <main className="py-8">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}