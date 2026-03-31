import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function ExpeditionSlugPage({ params }: { params: { slug: string } }) {
  const data = getContent('expeditions', params.slug);
  return <TutorielPageContent data={data as any} />;
}
