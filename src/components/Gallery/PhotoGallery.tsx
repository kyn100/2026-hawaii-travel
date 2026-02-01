import { useState } from 'react';

interface PhotoGalleryProps {
  images: string[];
  placeName: string;
}

export default function PhotoGallery({ images, placeName }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const getPlaceholderUrl = (index: number) =>
    `https://placehold.co/800x600/0d9488/ffffff?text=${encodeURIComponent(placeName)}+${index + 1}`;

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <img
          src={imageErrors.has(selectedIndex) ? getPlaceholderUrl(selectedIndex) : images[selectedIndex]}
          alt={`${placeName} - Photo ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
          onError={() => handleImageError(selectedIndex)}
        />
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Photo {selectedIndex + 1} of {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
              selectedIndex === index
                ? 'ring-2 ring-teal-500 ring-offset-2'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={imageErrors.has(index) ? getPlaceholderUrl(index) : image}
              alt={`${placeName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => handleImageError(index)}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
