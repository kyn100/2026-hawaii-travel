export type IslandId = 'oahu' | 'big-island' | 'maui';

export interface Location {
  lat: number;
  lng: number;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  description: string;
  address: string;
  mustTry?: string;
}

export interface Place {
  id: string;
  name: string;
  island: IslandId;
  location: Location;
  address: string;
  category: 'beach' | 'volcano' | 'historic' | 'nature' | 'culture' | 'adventure';
  shortDescription: string;
  whyPopular: string;
  history: string;
  facts: string[];
  wikipediaSlug?: string;
  images: string[];
  restaurants: Restaurant[];
}

export interface Island {
  id: IslandId;
  name: string;
  description: string;
  heroImage: string;
  center: Location;
  placeCount: number;
}

export interface UnsplashPhoto {
  id: string;
  url: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

export interface WikipediaContent {
  title: string;
  extract: string;
  thumbnail?: string;
}
