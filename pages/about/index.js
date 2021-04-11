import React from "react";
import MainHome from "../../components/Layout/MainHome";
import { MuiBox, BsRow, MuiGrid } from "../../components/Materialui";
import { makeStyles } from "@material-ui/core/styles";
import { borderLeft } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  webcolor: {
    color: "#4B7FCF",
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <MainHome className="homecontainer">
      <BsRow jc="center">
        <MuiGrid item xs={12} sm={12} md={7} lg={7}>
          <MuiBox m={{ xs: "1rem", sm: "1rem", md: "3rem", lg: "3rem" }}>
            {/* <h2 className="quote">About Us</h2> */}
            <div className="text-wrap">
              <h4 className={classes.webcolor}> Who we are ?</h4>
              We believe that any subject can be easy with the help of right
              tutor. Steep Learning is started to provide quality learning
              experience with minimal cost for students willing to have a one to
              one learning. we act as a bridge between aspiring student looking
              for a good teacher.
              <br /> <br />
              <h4 className={classes.webcolor}> How it works ?</h4>
              <h5 className={classes.webcolor}>For Students</h5>
              Once your registration is complete, we will send a confirmation
              mail of your successful registration Then, we will look out for a
              teacher who matches your timings and subject and a free demo
              class will be arranged. If you are comfortable with the tutor and
              ready to go, you will be a assigned the tutor and further details
              will be shared by one of our Steep Learning executive
              <br /> <br />
              <h5 className={classes.webcolor}>For Teachers</h5>
              Once your registration is complete, we will sent a confirmation
              mail of your successful registration we will match you with
              students based on your timing preference and subjects and you need
              to give a demo session to the student. Further information will be
              shared by our executive, Once you are assigned a student
            </div>
          </MuiBox>
        </MuiGrid>
      </BsRow>
    </MainHome>
  );
}

export default AboutUs;
