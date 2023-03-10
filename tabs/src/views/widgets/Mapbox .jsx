
import React from 'react';
import ReactMapboxGl, { Layer, Feature  , Marker,  ZoomControl} from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';



const Mapbox = ({ coordinates }) => {
    // Inicializa el mapa y configura sus opciones
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxvc3dhbGRvMjAyMyIsImEiOiJjbGYwbWk1ODAwN3U3M29wamJybWljMjA3In0.babo1QUmpTuLJHLg2JJdFw';
    const Map = ReactMapboxGl({
      accessToken: mapboxgl.accessToken,
      logoPosition : 'bottom-right',  
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
  
    const markerUrl  = "https://cdn-icons-png.flaticon.com/512/2776/2776067.png"; 
    // Renderiza el componente del mapa
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={coordinates}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}

        

      >
         <Marker coordinates={coordinates} anchor="center" >
        <img src={markerUrl}  style={{ width:"40" , height:"40" }} />
      </Marker>



        <ZoomControl/>

       


      </Map>
    );
  };
  
  export default Mapbox;
  