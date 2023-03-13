import { Button, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";

import { getListData } from "../../services/listService";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import { bodyContentStyle } from "../styles/ListWidget.styles";
import Mapbox from "./Mapbox";

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends Widget {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [-88.9573, 13.7260],
      zoom :[11]
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);

    console.log(this.state.coordinates) 

  }

  
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  async getData() {
    return getListData();
  }

  /**
   * Define the widget header.
   * @returns The header content, all ReactNode types are supported.
   */
  headerContent() {
    return (
      <div style={headerContentStyle()}>
        <List28Filled />
        <Text style={headerTextStyle()}>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent() {
    return (
      <div style={bodyContentStyle()}>
        <Mapbox coordinates={this.state.coordinates} zoom={this.state.zoom} />
      </div>
    );
  }

  /**
   * Define the widget footer.
   * @returns The footer content, all ReactNode types are supported.
   */
  footerContent() {
    return (
      <Button
        appearance="primary"
        size="medium"
        onClick={this.handleButtonClick}
      >
        Obtener Ubicacion
      </Button>
    );
  }
 
  handleButtonClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            coordinates: [position.coords.longitude,position.coords.latitude ],
            zoom:[18] 
          });
        },
        (error) => {
          console.error(error);
        }
      );

      console.log(this.state.coordinates) 
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
}
