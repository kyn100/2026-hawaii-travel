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

export interface Hotel {
  name: string;
  address: string;
  phone?: string;
  location: Location;
}

export interface WeatherDay {
  date: string;
  high: number;
  low: number;
  condition: 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy' | 'showers';
  precipitation: number;
}

export interface Weather {
  period: string;
  avgHigh: number;
  avgLow: number;
  waterTemp: number;
  humidity: number;
  forecast: WeatherDay[];
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
  hotel?: Hotel;
  weather?: Weather;
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
