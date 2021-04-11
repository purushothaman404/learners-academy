import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { InputLabel } from "@material-ui/core";
import { MuiButton } from "./";
const Img = styled.img`
  max-height: calc(80vh) !important;
`;
import Router from "next/router";
const MuiCarousel = (props) => {
  console.log("121 props.CarouselData", props.CarouselData);
  return (
    <Carousel interval={2000}>
      {props.CarouselData.map((childData) => (
        <Carousel.Item className={childData.name}>
          <Img
            id={childData.name}
            className="d-block w-100"
            src={childData.src}
            alt={childData.alt}
          />
          <Carousel.Caption>
            {/* <h1>{childData.head}</h1> */}
            <InputLabel
              style={{
                fontSize: "6rem",
                fontWeight: 600,
                marginTop: "1rem",
                color: "white",
              }}
            >
              {childData.head}
            </InputLabel>
            <p>{childData.detail}</p>

            <MuiButton
              className="reg"
              size="medium"
              variant="contained"
              color="white"
              onClick={() =>
                Router.push(childData.routing[0], childData.routing[1])
              }
            >
              {childData.btn}
            </MuiButton>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MuiCarousel;
