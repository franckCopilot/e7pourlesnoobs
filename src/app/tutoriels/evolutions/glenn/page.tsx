import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function GlennPage() {
  const data = getContent('evolutions', 'glenn');
  return <EvolutionPageContent data={data as any} />;
}
