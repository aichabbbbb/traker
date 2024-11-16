'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { Home, People, LocationOn, Settings } from '@mui/icons-material';

// Interface for marker data
interface Marker {
  position: google.maps.LatLngLiteral;
  title: string;
  image: string; // Add image property for each marker
}

// Marker data with image URLs for each marker
const markers: Marker[] = [
  { position: { lat: 48.857, lng: 2.351 }, title: 'Benjamin', image: 'https://storage.googleapis.com/a1aa/image/af2ohCRjaPVEOq1fAbTZmzzAmowzJLEuGJ5pyQmYPVwxfeedC.jpg' },
  { position: { lat: 48.858, lng: 2.352 }, title: 'Fanta', image: 'https://storage.googleapis.com/a1aa/image/I4DlJRjQS3ayBN2zagUYXCsD0lB5FmfAfAN5z53A3Fp3feedC.jpg"' },
  { position: { lat: 48.859, lng: 2.353 }, title: 'Marie', image: 'https://storage.googleapis.com/a1aa/image/af2ohCRjaPVEOq1fAbTZmzzAmowzJLEuGJ5pyQmYPVwxfeedC.jpg' },
  { position: { lat: 48.860, lng: 2.354 }, title: 'Ike', image: 'https://storage.googleapis.com/a1aa/image/eGjXdjmQ9MSdAaEEAwTEQv6nhsTs4wdBenBTZQIYV1wzfeedC.jpg' },
];

const MapPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD9Y9wc47zT2tK1vEKJGTeiN1MHbA7r6tY`; // Add your own API key here
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }
  }, []);

  const initMap = () => {
    if (mapRef.current && window.google) {
      const map = new google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: 48.8566, lng: 2.3522 }, // Centered on Paris, France
      });

      markers.forEach((marker) => {
        console.log(`Adding marker: ${marker.title}, Image: ${marker.image}`);

        new google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
          icon: {
            url: marker.image,
            scaledSize: new google.maps.Size(50, 50), // Adjust the size of the image if necessary
          },
        });
      });
    }
  };

  return (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      {/* Map Container */}
      <Box ref={mapRef} sx={{ height: '100%', width: '100%' }} id="map"></Box>

      {/* Logo */}
      <Box sx={{ position: 'absolute', top: 4, left: 4 }}>
        <img
          alt="Logo"
          src="https://storage.googleapis.com/a1aa/image/uhACu6h1bR4oDlN9DywQT3FEENhxGP76O9H3uipBTAhuA87E.jpg"
          height={20}
        />
      </Box>

      {/* Title and Search Input */}
      <Box sx={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <Typography variant="h5" color="error" fontWeight="bold">
          Carte des Voyageurs
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Recherche"
          sx={{ mt: 2, width: 320 }}
          size="small"
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2, fontSize: '0.875rem' }}>
          <Typography color="textSecondary">Accueil</Typography>
          <Typography color="textSecondary">Suggestions</Typography>
          <Typography color="textSecondary">Maitres Nationaux</Typography>
        </Box>
      </Box>

      {/* Profile Pictures */}
      {['Benjamin', 'Fanta', 'Marie', 'Ike'].map((name, index) => (
        <Box
          key={name}
          sx={{
            position: 'absolute',
            top: `${32 + index * 8}%`,
            left: `${25 + index * 10}%`,
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <img
            alt={name}
            className="profile-pic"
            src={`https://storage.googleapis.com/a1aa/image/${name}.jpg`}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
          <Typography variant="caption">{name}</Typography>
        </Box>
      ))}

      {/* Button */}
      <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
        <Button variant="contained" color="error" sx={{ px: 8, py: 2, borderRadius: '50px' }}>
          Communauté
        </Button>
      </Box>

      {/* Sidebar Icons */}
      <Box sx={{ position: 'absolute', top: '50%', left: 4, transform: 'translateY(-50%)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <IconButton color="error" sx={{ backgroundColor: 'white', padding: 2, borderRadius: '50%', boxShadow: 2 }}>
            <Home />
          </IconButton>
          <IconButton color="error" sx={{ backgroundColor: 'white', padding: 2, borderRadius: '50%', boxShadow: 2 }}>
            <People />
          </IconButton>
          <IconButton color="error" sx={{ backgroundColor: 'white', padding: 2, borderRadius: '50%', boxShadow: 2 }}>
            <LocationOn />
          </IconButton>
          <IconButton color="error" sx={{ backgroundColor: 'white', padding: 2, borderRadius: '50%', boxShadow: 2 }}>
            <Settings />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MapPage;
