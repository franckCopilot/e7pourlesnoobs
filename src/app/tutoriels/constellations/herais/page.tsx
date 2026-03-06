import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function HeraisPage() {
  const data = getContent('constellations', 'herais');
  return <TutorielPageContent data={data as any} />;
}
