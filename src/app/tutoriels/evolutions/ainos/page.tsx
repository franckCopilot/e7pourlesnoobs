import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function AinosPage() {
  const data = getContent('evolutions', 'ainos');
  return <EvolutionPageContent data={data as any} />;
}
