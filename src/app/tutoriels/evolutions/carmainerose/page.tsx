import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function CarmainerosePage() {
  const data = getContent('evolutions', 'carmainerose');
  return <EvolutionPageContent data={data as any} />;
}
