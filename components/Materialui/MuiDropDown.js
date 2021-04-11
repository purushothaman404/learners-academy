import React, { useState } from "react";
import { MenuItem, InputLabel, Select, TextField } from "@material-ui/core";
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

const MuiDropDown = ({
  value,
  placeHolder,
  onChange,
  onBlur,
  mapChildVal,
  ...res
}) => {
  const classes = styles();
  return (
    <>
      <TextField
        className={classes.root}
        id={`${placeHolder} select`}
        required={res.required}
        select
        label={placeHolder}
        value={value}
        margin="dense"
        error={res.error}
        onChange={(event) => onChange(event.target.value)}
        onBlur={(event) => onBlur && onBlur(event.target.value)}
        variant="outlined"
      >
        {mapChildVal.map((mapChildVal) => (
          <MenuItem key={mapChildVal} value={mapChildVal}>
            {mapChildVal}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default MuiDropDown;
