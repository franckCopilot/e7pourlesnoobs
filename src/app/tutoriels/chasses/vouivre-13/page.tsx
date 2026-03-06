import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function VouivrePage() {
  const data = getContent('chasses', 'vouivre-13');
  return <TutorielPageContent data={data as any} />;
}
