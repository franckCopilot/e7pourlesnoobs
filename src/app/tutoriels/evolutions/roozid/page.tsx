import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function RoozidPage() {
  const data = getContent('evolutions', 'roozid');
  return <EvolutionPageContent data={data as any} />;
}
