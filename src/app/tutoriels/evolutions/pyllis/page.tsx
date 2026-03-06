import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function PyllisPage() {
  const data = getContent('evolutions', 'pyllis');
  return <EvolutionPageContent data={data as any} />;
}
