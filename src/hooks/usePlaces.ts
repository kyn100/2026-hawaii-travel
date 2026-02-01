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
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Waikiki_Beach%2C_Honolulu.JPG/1280px-Waikiki_Beach%2C_Honolulu.JPG',
        center: { lat: 21.4389, lng: -158.0001 },
        placeCount: 6,
      },
      {
        id: 'big-island',
        name: islandsI18n['big-island'][language].name,
        description: islandsI18n['big-island'][language].description,
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kilauea_Lava_Flow_1.jpg/1280px-Kilauea_Lava_Flow_1.jpg',
        center: { lat: 19.5429, lng: -155.6659 },
        placeCount: 5,
      },
      {
        id: 'maui',
        name: islandsI18n.maui[language].name,
        description: islandsI18n.maui[language].description,
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Haleakala_Crater.jpg/1280px-Haleakala_Crater.jpg',
        center: { lat: 20.7984, lng: -156.3319 },
        placeCount: 5,
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
