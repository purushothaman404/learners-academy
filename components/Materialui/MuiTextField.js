import React from "react";
import { TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
  },
}));

export default function MuiTextField({
  label,
  onChange,
  onBlur,
  variant,
  value,
  className,
  margin,
  ...rest
}) {
  const classes = styles();
  return (
    <TextField
      className={`${classes.root} ${className}`}
      label={label}
      value={value}
      variant={variant}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur && onBlur(e.target.value)}
      margin={margin}
      {...rest}
    />
  );
}

MuiTextField.defaultProps = {
  variant: "outlined",
  margin: "dense",
};
