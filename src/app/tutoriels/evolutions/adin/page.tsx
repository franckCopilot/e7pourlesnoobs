import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function AdinPage() {
  const data = getContent('evolutions', 'adin');
  return <EvolutionPageContent data={data as any} />;
}
