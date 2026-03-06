import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function ArdeurPage() {
  const data = getContent('de-tutoriels', 'ardeur');
  return <TutorielPageContent data={data as any} />;
}
