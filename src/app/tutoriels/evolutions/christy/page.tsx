import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function ChristyPage() {
  const data = getContent('evolutions', 'christy');
  return <EvolutionPageContent data={data as any} />;
}
