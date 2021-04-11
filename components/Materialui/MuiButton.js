import React from "react";
import { Button } from "@material-ui/core";

const MuiButton = (props) => {
  return (
    <Button
      variant={props.variant}
      disabled={props.disabled}
      className={props.className}
      color={props.color}
      style={{ backgroundColor: props.backgroundColor, color: props.fontColor }}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default MuiButton;
