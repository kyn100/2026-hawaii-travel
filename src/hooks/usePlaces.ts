import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { placesI18n, placesBase, islandsI18n } from '../data/placesI18n';
import type { Place, Island } from '../types';

export function usePlaces() {
  const { language } = useLanguage();

  const places = useMemo((): Place[] => {
    return Object.entries(placesBase).map(([id, base]) => {
      const i18n = placesI18n[id]?.[language] || placesI18n[id]?.en;
      return {
        ...base,
        name: i18n?.name || id,
        address: i18n?.address || '',
        shortDescription: i18n?.shortDescription || '',
        whyPopular: i18n?.whyPopular || '',
        history: i18n?.history || '',
        facts: i18n?.facts || [],
        restaurants: i18n?.restaurants || [],
      };
    });
  }, [language]);

  const islands = useMemo((): Island[] => {
    return [
      {
        id: 'oahu',
        name: islandsI18n.oahu[language].name,
        description: islandsI18n.oahu[language].description,
        heroImage: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=1200',
        center: { lat: 21.4389, lng: -158.0001 },
        placeCount: 6,
        hotel: {
          name: 'Hyatt Place Waikiki Beach',
          address: '175 Paoakalani Avenue, Honolulu, HI, US, 96815',
          phone: '+1 808 922 3861',
          location: { lat: 21.2743, lng: -157.8227 },
        },
      },
      {
        id: 'big-island',
        name: islandsI18n['big-island'][language].name,
        description: islandsI18n['big-island'][language].description,
        heroImage: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=1200',
        center: { lat: 19.5429, lng: -155.6659 },
        placeCount: 5,
        hotel: {
          name: 'Club Wyndham Mauna Loa Village',
          address: '78-7190 Kaleiopapa St., Kailua-Kona, HI, 96740',
          location: { lat: 19.6285, lng: -155.9919 },
        },
      },
      {
        id: 'maui',
        name: islandsI18n.maui[language].name,
        description: islandsI18n.maui[language].description,
        heroImage: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200',
        center: { lat: 20.7984, lng: -156.3319 },
        placeCount: 5,
        hotel: {
          name: 'Maui Schooner Resort',
          address: '980 S Kihei Rd, Kihei, HI, 96753',
          location: { lat: 20.7366, lng: -156.4560 },
        },
      },
    ];
  }, [language]);

  const getIslandById = (id: string): Island | undefined => {
    return islands.find(island => island.id === id);
  };

  const getPlaceById = (id: string): Place | undefined => {
    return places.find(place => place.id === id);
  };

  const getPlacesByIsland = (islandId: string): Place[] => {
    return places.filter(place => place.island === islandId);
  };

  return {
    places,
    islands,
    getIslandById,
    getPlaceById,
    getPlacesByIsland,
  };
}
