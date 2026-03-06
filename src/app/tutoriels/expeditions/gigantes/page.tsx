import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function GigantesPage() {
  const data = getContent('expeditions', 'gigantes');
  return <TutorielPageContent data={data as any} />;
}
