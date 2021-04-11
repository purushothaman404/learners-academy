import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { style } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "1rem",
  },
}));

const MuiGrid = (props) => {
  const classes = useStyles();
  return <Grid className={classes.root} {...props} />;
};

export default MuiGrid;
