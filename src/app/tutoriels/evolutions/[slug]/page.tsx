import TutorielPageContent from '@/components/TutorielPageContent';
import { getContent } from '@/lib/content';

export default function EvolutionSlugPage({ params }: { params: { slug: string } }) {
  const data = getContent('evolutions', params.slug);
  return <TutorielPageContent data={data as any} />;
}
