import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function WandaPage() {
  const data = getContent('evolutions', 'wanda');
  return <EvolutionPageContent data={data as any} />;
}
