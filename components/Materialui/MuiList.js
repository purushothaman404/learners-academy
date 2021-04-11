import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { MuiGrid, BsRow } from "./";

const MuiList = ({ mapVal, title, ...props }) => {
  let i = 0;
  return (
    <MuiGrid>
      <BsRow jc={"center"} key={`${title} row`}>
        <Typography
          variant="h6"
          className={title}
          key={`${title} typo`}
          style={{ justifyContent: "center", color: props.txtColor }}
        >
          {title}
        </Typography>
      </BsRow>
      <div className={title} key={`${title} i`}>
        <List dense key={`${title} list`}>
          {props.children.map((child) => (
            <ListItem key={`${i++} child`} style={{ textAlign: "center" }}>
              <ListItemText>{child}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </MuiGrid>
  );
};

export default MuiList;
