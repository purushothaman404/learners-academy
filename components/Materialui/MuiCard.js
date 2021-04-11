import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MuiButton } from "../Materialui/";
import Router from "next/router";
import { BsRow } from "./";
const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    height: 400,
    borderRadius: "1rem",
  },
  media: {
    height: 200,
  },
});

const MuiCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => Router.push(props.routing[0], props.routing[1])}
      >
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <BsRow jc="center">
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </BsRow>
          <BsRow jc="center">
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ textAlign: "center" }}
            >
              {props.description}
            </Typography>
          </BsRow>
        </CardContent>
      </CardActionArea>

      <BsRow jc="center">
        <div style={{ margin: "2rem" }}>
          <MuiButton
            className="reg"
            variant="contained"
            backgroundColor="#4B7FCF"
            fontColor="#FFF"
            onClick={() => Router.push(props.routing)}
          >
            Register
          </MuiButton>
        </div>
      </BsRow>
    </Card>
  );
};

export default MuiCard;
