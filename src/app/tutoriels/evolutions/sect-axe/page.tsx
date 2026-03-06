import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function SectAxePage() {
  const data = getContent('evolutions', 'sect-axe');
  return <EvolutionPageContent data={data as any} />;
}
