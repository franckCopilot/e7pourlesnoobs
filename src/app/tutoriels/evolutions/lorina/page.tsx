import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function LorinaPage() {
  const data = getContent('evolutions', 'lorina');
  return <EvolutionPageContent data={data as any} />;
}
