import { Button, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { Widget } from "./lib/Widget";

import React, { Component } from 'react';

/**
 * This component is used to display the required
 * privacy statement which can be found in a link in the
 * about tab.
 */
class Privacy extends Component {
  render() {
    return (
      <div>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent"></Button>
      </div>
    );
  }
}

export default Privacy;
