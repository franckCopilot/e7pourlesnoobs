import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function MalusPage() {
  const data = getContent('de-tutoriels', 'malus');
  return <TutorielPageContent data={data as any} />;
}
