import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function CaidesPage() {
  const data = getContent('chasses', 'caides-13');
  return <TutorielPageContent data={data as any} />;
}
