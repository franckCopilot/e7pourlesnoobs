import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function MoroiPage() {
  const data = getContent('expeditions', 'moroi');
  return <TutorielPageContent data={data as any} />;
}
