import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function DorisPage() {
  const data = getContent('evolutions', 'doris');
  return <EvolutionPageContent data={data as any} />;
}
