import { useState, useEffect } from 'react';
import type { WikipediaContent } from '../types';

export function useWikipedia(slug?: string) {
  const [data, setData] = useState<WikipediaContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchWikipedia = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Wikipedia content');
        }

        const json = await response.json();

        setData({
          title: json.title,
          extract: json.extract,
          thumbnail: json.thumbnail?.source,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchWikipedia();
  }, [slug]);

  return { data, loading, error };
}
