import HomeContent from '@/components/HomeContent';
import { getAllContent } from '@/lib/content';

export default function Home() {
  const items = getAllContent('home').sort((a, b) => ((a.order as number) || 0) - ((b.order as number) || 0));
  return <HomeContent items={items as any} />;
}

