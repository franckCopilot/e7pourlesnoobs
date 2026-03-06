import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function ApprofondirPage() {
  const data = getContent('equipements', 'approfondir');
  return <TutorielPageContent data={data as any} />;
}
