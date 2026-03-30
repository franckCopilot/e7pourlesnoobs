import HomeContent from '@/components/HomeContent';
import { getLatestVideos } from '@/lib/youtube';

export const revalidate = 3600; // Re-fetch YouTube videos every hour

export default async function Home() {
  const videos = await getLatestVideos(9);
  return <HomeContent videos={videos} />;
}

