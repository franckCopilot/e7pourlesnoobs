import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function JenaPage() {
  const data = getContent('evolutions', 'jena');
  return <EvolutionPageContent data={data as any} />;
}
