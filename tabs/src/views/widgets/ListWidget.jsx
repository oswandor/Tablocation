import { Button } from "@fluentui/react-components";
import {
  bodyContentStyle
} from "../styles/ListWidget.styles";
import MapView from "./MapBox";
import React, { useState } from 'react';


function ListWidget() {
  const [coordinates, setCoordinates] = useState(null);

  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates(position.coords);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }

  return (
    <div style={bodyContentStyle()}>
      <MapView></MapView>
      <Button
        appearance="primary"
        size="medium"
        onClick={handleClick}
      >
        View Details
      </Button>
    </div>
  );
}

export default ListWidget;
