import * as React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoicm9uYWxvc3dhbGRvMjAyMyIsImEiOiJjbGYwbWk1ODAwN3U3M29wamJybWljMjA3In0.babo1QUmpTuLJHLg2JJdFw'
});

function MapView() {
    return(<Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[13.754059,-89.483772]} />
        </Layer>
      </Map>);
  }
  
export default MapView;

