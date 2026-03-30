export interface YouTubeVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const CHANNEL_ID = 'UCpZvUfGszEL0X_Pwbcp17mw';
// Uploads playlist = channel ID with "UC" replaced by "UU"
const UPLOADS_PLAYLIST_ID = CHANNEL_ID.replace('UC', 'UU');

/**
 * Fetches the latest videos from the channel's uploads playlist.
 * Uses the playlistItems endpoint (1 quota unit) instead of search (100 quota units).
 */
export async function getLatestVideos(maxResults = 9): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error('YOUTUBE_API_KEY is not set');
    return [];
  }

  const url = new URL(`${YOUTUBE_API_BASE}/playlistItems`);
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('playlistId', UPLOADS_PLAYLIST_ID);
  url.searchParams.set('maxResults', String(maxResults));
  url.searchParams.set('key', apiKey);

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.error('YouTube API error:', res.status, await res.text());
    return [];
  }

  const data = await res.json();

  if (!data.items || !Array.isArray(data.items)) {
    return [];
  }

  return data.items.map((item: any) => ({
    videoId: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail:
      item.snippet.thumbnails?.maxres?.url ||
      item.snippet.thumbnails?.high?.url ||
      item.snippet.thumbnails?.medium?.url ||
      '',
    publishedAt: item.snippet.publishedAt,
  }));
}

/** Formats an ISO date string to a French locale short date (e.g. "12 mars 2026"). */
export function formatDateFR(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
