import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function ConstellationSlugPage({ params }: { params: { slug: string } }) {
  const data = getContent('constellations', params.slug);
  return <TutorielPageContent data={data as any} />;
}
