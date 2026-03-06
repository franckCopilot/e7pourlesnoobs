import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function PherusPage() {
  const data = getContent('expeditions', 'pherus');
  return <TutorielPageContent data={data as any} />;
}
