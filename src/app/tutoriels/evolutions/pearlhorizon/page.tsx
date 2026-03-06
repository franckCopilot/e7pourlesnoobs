import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function PearlhorizonPage() {
  const data = getContent('evolutions', 'pearlhorizon');
  return <EvolutionPageContent data={data as any} />;
}
