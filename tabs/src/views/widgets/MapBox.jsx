
import React from 'react';
import ReactMapboxGl, {  Marker,  ZoomControl} from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';



const Mapbox = ({ coordinates,zoom }) => {
    // Inicializa el mapa y configura sus opciones\environments\Default-a978bdf9-42b1-41de-ac1b-2a05cf98e013\approvals\received
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxvc3dhbGRvMjAyMyIsImEiOiJjbGYwbWk1ODAwN3U3M29wamJybWljMjA3In0.babo1QUmpTuLJHLg2JJdFw';
    const Map = ReactMapboxGl({
      accessToken: mapboxgl.accessToken,
      logoPosition : 'bottom-right',  
    });

  
    const markerUrl  = "https://cdn-icons-png.flaticon.com/512/2776/2776067.png"; 
    // Renderiza el componente del mapa
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        zoom={[zoom]}
        center={coordinates}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
      >
         <Marker coordinates={coordinates} anchor="center" draggable={false}  >
        <img src={markerUrl} alt=""  style={{ width:"40" , height:"40" }} />
      </Marker>



        <ZoomControl/>

       


      </Map>
    );
  };
  
  export default Mapbox;
  