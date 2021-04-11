import React from "react";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiBox } from "./";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    height: "auto",
  },
}));

const MuiCardMedia = (props) => {
  const classes = useStyles();
  return (
    <CardMedia className={classes.root} image={props.image}>
      <MuiBox
        p={{
          xs: "9rem 5rem 15rem 1rem",
          sm: "9rem 5rem 15rem 1rem",
          md: "13rem 5rem 15rem 5rem",
          lg: "13rem 5rem 15rem 5rem",
        }}
      >
        {props.children}
      </MuiBox>
    </CardMedia>
  );
};

export default MuiCardMedia;
