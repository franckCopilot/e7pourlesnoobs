import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function MagnarPage() {
  const data = getContent('constellations', 'magnar');
  return <TutorielPageContent data={data as any} />;
}
