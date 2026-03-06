import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function MontmorancyPage() {
  const data = getContent('evolutions', 'montmorancy');
  return <EvolutionPageContent data={data as any} />;
}
