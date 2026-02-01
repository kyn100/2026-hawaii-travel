import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import type { Place, Location } from '../../types';
import 'leaflet/dist/leaflet.css';

interface PlaceMapProps {
  center: Location;
  zoom?: number;
  places?: Place[];
  singlePlace?: Place;
  className?: string;
}

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function PlaceMap({
  center,
  zoom = 10,
  places,
  singlePlace,
  className = 'h-64',
}: PlaceMapProps) {
  const markersToShow = singlePlace ? [singlePlace] : places || [];

  return (
    <div className={className}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersToShow.map(place => (
          <Marker
            key={place.id}
            position={[place.location.lat, place.location.lng]}
            icon={defaultIcon}
          >
            <Popup>
              <div className="text-center">
                <strong className="block text-sm">{place.name}</strong>
                <span className="text-xs text-gray-500">{place.address}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
