import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function KluriPage() {
  const data = getContent('evolutions', 'kluri');
  return <EvolutionPageContent data={data as any} />;
}
