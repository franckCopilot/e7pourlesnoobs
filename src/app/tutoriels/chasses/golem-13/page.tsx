import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function GolemPage() {
  const data = getContent('chasses', 'golem-13');
  return <TutorielPageContent data={data as any} />;
}
