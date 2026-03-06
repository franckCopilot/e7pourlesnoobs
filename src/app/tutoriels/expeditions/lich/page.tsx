import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function LichPage() {
  const data = getContent('expeditions', 'lich');
  return <TutorielPageContent data={data as any} />;
}
