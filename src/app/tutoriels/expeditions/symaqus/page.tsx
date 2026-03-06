import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function SymaqusPage() {
  const data = getContent('expeditions', 'symaqus');
  return <TutorielPageContent data={data as any} />;
}
