import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function ArowellPage() {
  const data = getContent('evolutions', 'arowell');
  return <EvolutionPageContent data={data as any} />;
}
