import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function BanshiePage() {
  const data = getContent('chasses', 'banshie-13');
  return <TutorielPageContent data={data as any} />;
}
