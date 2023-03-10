import { Button } from "@fluentui/react-components";
import { getListData } from "../../services/listService";
import { Widget } from "../lib/Widget";
import MapView from "../MapBox";
import {bodyContentStyle} from "../styles/ListWidget.styles";
import * as microsoftTeams from "@microsoft/teams-js";
import Mapbox from "./Mapbox ";


/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends Widget {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
   constructor(){


   }


  async getData() {
    return getListData();
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent() {

    return (
      <div style={bodyContentStyle()}>
        <Mapbox coordinates={[-88.9573,13.7260]}></Mapbox>
      </div>
    );
  }

 
  /**
   * Define the widget footer.
   * @returns The footer content, all ReactNode types are supported.
   */
  footerContent() {
    
    if (!microsoftTeams?.initialize) {
      console.error("Teams no está disponible en este entorno");
      return null;
    }
  
    
    microsoftTeams.initialize();
  

    const handleButtonClick = () => {

     
    let locationProps = {"allowChooseLocation":true,"showMap":true};

if(microsoftTeams.geolocation.isSupported()) {
    const locationPromise = microsoftTeams.geolocation.getLocation(locationProps);
    locationPromise
        .then((result) => {console.log(JSON.stringify(result));})
        .catch((error) => {console.log(error);});
}
else {
    /* Manejar caso en el que la capacidad no está soportada */
}

     
    };

   //const handleButtonClick = ()=> { console.log("Hellos")}

    return (
      <Button
        appearance="primary"
        size="medium"
        onClick={handleButtonClick} // add the event handler to the button
      >
        Obtener Ubicacion
      </Button>
    );
  }
}