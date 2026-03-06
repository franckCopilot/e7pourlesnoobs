import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function HazelPage() {
  const data = getContent('evolutions', 'hazel');
  return <EvolutionPageContent data={data as any} />;
}
