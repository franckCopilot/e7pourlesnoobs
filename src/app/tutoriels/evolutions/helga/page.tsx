import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function HelgaPage() {
  const data = getContent('evolutions', 'helga');
  return <EvolutionPageContent data={data as any} />;
}
