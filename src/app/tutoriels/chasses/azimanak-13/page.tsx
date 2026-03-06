import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function AzimanakPage() {
  const data = getContent('chasses', 'azimanak-13');
  return <TutorielPageContent data={data as any} />;
}
