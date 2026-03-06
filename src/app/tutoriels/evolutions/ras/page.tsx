import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function RasPage() {
  const data = getContent('evolutions', 'ras');
  return <EvolutionPageContent data={data as any} />;
}
