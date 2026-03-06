import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function InquisitorPage() {
  const data = getContent('evolutions', 'inquisitor');
  return <EvolutionPageContent data={data as any} />;
}
