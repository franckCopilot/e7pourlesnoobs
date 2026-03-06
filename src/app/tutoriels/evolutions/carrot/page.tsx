import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function CarrotPage() {
  const data = getContent('evolutions', 'carrot');
  return <EvolutionPageContent data={data as any} />;
}
