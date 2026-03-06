import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function RimaPage() {
  const data = getContent('evolutions', 'rima');
  return <EvolutionPageContent data={data as any} />;
}
