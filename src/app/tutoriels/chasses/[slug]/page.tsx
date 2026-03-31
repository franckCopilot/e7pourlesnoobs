import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function ChasseSlugPage({ params }: { params: { slug: string } }) {
  const data = getContent('chasses', params.slug);
  return <TutorielPageContent data={data as any} />;
}
