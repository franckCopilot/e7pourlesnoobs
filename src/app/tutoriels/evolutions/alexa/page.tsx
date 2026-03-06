import EvolutionPageContent from '@/components/EvolutionPageContent';
import { getContent } from '@/lib/content';

export default function AlexaPage() {
  const data = getContent('evolutions', 'alexa');
  return <EvolutionPageContent data={data as any} />;
}
