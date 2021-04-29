import React, { Component } from "react";
import Slider from "react-slick";
import { MuiBox, BsRow, MuiGrid } from "../Materialui";
import { Grid } from "@material-ui/core";

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};
const QuoteSlider = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#24272a",
        opacity: "0.95",
        borderRadius: "1rem",
      }}
    >
      <Slider {...settings}>
        {props.quotes.map((qt) => (
          <MuiBox key={qt.auth}>
            <MuiGrid item xs={12} sm={12} md={12} lg={12}>
              <BsRow jc="center">
                <label
                  style={{
                    color: "white",
                    fontWeight: "300",
                    fontSize: "2rem",
                    textAlign: "center",
                    margin: "2rem",
                    justifyContent: "center",
                  }}
                >
                  {qt.quote}
                </label>
              </BsRow>
            </MuiGrid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <BsRow jc="center">
                <label
                  style={{
                    color: "white",
                    // float: "right",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    marginBottom: "2rem",
                    justifyContent: "center",
                  }}
                >
                  {`— ${qt.auth}`}
                </label>
              </BsRow>
            </Grid>
          </MuiBox>
        ))}
      </Slider>
    </div>
  );
};

export default QuoteSlider;
