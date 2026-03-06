import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function RikorisPage() {
  const data = getContent('evolutions', 'rikoris');
  return <EvolutionPageContent data={data as any} />;
}
