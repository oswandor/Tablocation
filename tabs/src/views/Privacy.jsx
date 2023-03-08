import React from "react";
import { Button, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { Widget } from "./lib/Widget";


/**
 * This component is used to display the required
 * privacy statement which can be found in a link in the
 * about tab.
 */
class Privacy extends Widget {
  render() {
    return (
      <div>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent"></Button>
      </div>
    );
  }
}

export default Privacy;
