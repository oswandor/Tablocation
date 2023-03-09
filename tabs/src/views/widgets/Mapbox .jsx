
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';



const Mapbox = () => {
    // Inicializa el mapa y configura sus opciones
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxvc3dhbGRvMjAyMyIsImEiOiJjbGYwbWk1ODAwN3U3M29wamJybWljMjA3In0.babo1QUmpTuLJHLg2JJdFw';
    const Map = ReactMapboxGl({
      accessToken: mapboxgl.accessToken,
    });
  
    // Define los estilos de los componentes del mapa
    const layerStyles = {
      ocean: {
        fill: '#00aced',
      },
      land: {
        fill: '#f2efe9',
      },
    };
  
    // Renderiza el componente del mapa
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[-74.5, 40]}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <Layer type="fill" id="ocean" paint={layerStyles.ocean}>
          <Feature coordinates={[[-180, 90], [-180, -90], [180, -90], [180, 90]]} />
        </Layer>
        <Layer type="fill" id="land" paint={layerStyles.land}>
          <Feature coordinates={[[-180, 90], [-180, -90], [180, -90], [180, 90]]} />
        </Layer>
      </Map>
    );
  };
  
  export default Mapbox;
  