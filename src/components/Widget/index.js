import React from "react";

import Widget from "./styles";

function WidgetComponent({ children, header }) {
  return (
    <Widget>
      {header && <Widget.Header>{header}</Widget.Header>}

      {children && <Widget.Content>{children}</Widget.Content>}
    </Widget>
  );
}

export default WidgetComponent;
