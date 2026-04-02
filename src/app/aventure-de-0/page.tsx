import { getAllContent } from '@/lib/content';
import AventurePageContent from '@/components/AventurePageContent';

export default function AventureDeZero() {
  const journeys = getAllContent('aventure')
    .sort((a, b) => ((a.order as number) || 0) - ((b.order as number) || 0))
    .map((j) => ({
      title: j.title as string,
      videoId: j.videoId as string,
      videoFirst: j.videoFirst as boolean,
      body: j.body as string,
    }));

  return <AventurePageContent journeys={journeys} />;
}
