import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function AquinaPage() {
  const data = getContent('constellations', 'aquina');
  return <TutorielPageContent data={data as any} />;
}
