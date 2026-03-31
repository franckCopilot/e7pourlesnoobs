import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function EthelPage() {
  const data = getContent('constellations', 'ethel');
  return <TutorielPageContent data={data as any} />;
}
