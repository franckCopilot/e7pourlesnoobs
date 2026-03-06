import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function LesbasesPage() {
  const data = getContent('equipements', 'les-bases');
  return <TutorielPageContent data={data as any} />;
}
