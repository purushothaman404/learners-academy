import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { BsRow } from "../../components/Materialui/index";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const CategoryCard = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      key={props.activety.head}
      id={props.activety.head}
    >
      <CardMedia
        className={classes.media}
        image={props.activety.src}
        title="Contemplative Reptile"
        key={props.activety.head}
      />
      <CardContent>
        <BsRow jc="center">
          <Typography gutterBottom variant="h5" component="h2">
            {props.activety.head}
          </Typography>
        </BsRow>
        <BsRow jc="center">
          <Typography variant="body2" color="textSecondary" component="p">
            {props.activety.detail}
          </Typography>
        </BsRow>
      </CardContent>
    </div>
  );
};

export default CategoryCard;
