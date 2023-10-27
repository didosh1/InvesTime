import React, { useState, useEffect } from 'react';
import { GeolocationControl, RouteButton, Map, Placemark } from 'react-yandex-maps';
import { Button, Container, Input, Text } from '@mantine/core';
import { dataAttraction } from '../../Consts/Consts';
export default function MapWithIcon() {

  const encodedAddress = dataAttraction.map((adr) => encodeURIComponent(adr.address));
  const [coords, setCoords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onGeocode = (addresses) => {
      Promise.all(
        addresses.map((adr) => {
          return fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=81790981-5538-43a8-bd99-17eee7e0b3b4&geocode=${adr}&format=json`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              const feature = data.response.GeoObjectCollection.featureMember[0];
              if (feature) {
                const coordinates = feature.GeoObject.Point.pos.split(" ");
                const [coord1, coord2] = coordinates.map((coord) => Number(coord));
                const newCoordinates = [coord2, coord1];
                return newCoordinates;
              }
              return null;
            })
            .catch((error) => {
              console.error('Error:', error);
              return null;
            });
        })
      )
        .then((coordsArray) => {
          setCoords(coordsArray);
          setLoading(false);
        });
    };

    onGeocode(encodedAddress);
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <div style={{ marginTop: '20px' }}>
        <Map
          defaultState={{ center: coords[0], zoom: 14 }}
          width="100%"
          height="500px"
        >
          {coords.map((coord, index) => (
            <Placemark key={index} geometry={coord} options={{ preset: 'islands#redIcon' }} />
          ))}
          <RouteButton></RouteButton>
          <GeolocationControl options={{ float: 'left' }} />
        </Map>
      </div>
    </Container>
  );
}