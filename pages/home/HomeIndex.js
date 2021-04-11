import React from "react";
import {
  MuiCarousel,
  MuiBox,
  BsRow,
  MuiGrid,
  MuiCard,
  MuiCardMedia,
  MuiButton,
} from "../../components/Materialui";

import { makeStyles } from "@material-ui/core/styles";
import { Fab, Card } from "@material-ui/core";
import ActivetyPros from "./activetyPros";
import ActivetCart from "./Activety";
import quotes from "./quotes";
import QuoteSlider from "./QuoteSlider";
import Router from "next/router";

const useStyle = makeStyles((theme) => ({
  roundedBtn: {
    borderRadius: "50%",
  },
  cardWidth: {
    maxWidth: 345,
    height: "auto",
  },
}));

function HomeIndex() {
  const classes = useStyle();
  const biz = ActivetyPros();
  const bizQuotes = quotes();
  console.log("121 CarouselData", biz);
  return (
    <div>
      <MuiBox>
        <MuiCardMedia image="/Image1.png" title="student">
          <MuiGrid
            item
            m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
            xs={9}
            sm={9}
            md={6}
            lg={6}
          >
            <MuiBox
              fontFamily="h6.fontFamily"
              fontWeight={600}
              fontSize={{
                xs: "1.5rem",
                sm: "1.5rem",
                md: "4rem",
                lg: "4rem",
              }}
            >
              <BsRow>
                {`Are you a `}
                <p style={{ color: "#4B7FCF" }}> &nbsp; student?</p>
              </BsRow>
            </MuiBox>
            <MuiButton
              className="reg"
              variant="contained"
              backgroundColor="#4B7FCF"
              fontColor="#FFF"
              onClick={() => {
                Router.push(
                  "/registration?role=student",
                  "/registration/student"
                );
              }}
              size="large"
            >
              Register
            </MuiButton>

            {/* <p>Register now!</p> */}
          </MuiGrid>
        </MuiCardMedia>
      </MuiBox>
      {/* <BsRow jc="center">
        <a href="/#registration" className="d-sm-none d-md-block d-none">
          <Fab
            color="primary"
            component="span"
            aria-label="add"
            variant="extended"
          >
            <img src="/downarrow.svg" height="15px" />
          </Fab>
        </a>
      </BsRow> */}

      <BsRow jc="center" id="registration">
        <MuiGrid item xs={12} sm={12} md={3} lg={3}>
          <MuiBox
            m={{ xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" }}
            style={{ justifyContent: "center" }}
          >
            <MuiCard
              img="/child-learning.png"
              title="Student Registration"
              routing={["/registration?role=student", "/registration/student"]}
              description="Register and start learning"
            />
          </MuiBox>
        </MuiGrid>

        <MuiGrid item xs={12} sm={12} md={3} lg={3}>
          <MuiBox
            m={{ xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" }}
            style={{ justifyContent: "center" }}
          >
            <MuiCard
              img="/best-teacher.png"
              title="Teacher Registration"
              routing={["/registration?role=staff", "/registration/staff"]}
              description="Register and start earning from home"
            />
          </MuiBox>
        </MuiGrid>
        <MuiGrid item xs={12} sm={12} md={3} lg={3}>
          <MuiBox
            m={{ xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" }}
            style={{ justifyContent: "center" }}
          >
            <MuiCard
              img="/girl-student.png"
              title="Free demo for student"
              routing={["/registration?role=demo", "/registration/demo"]}
              description="Get a Free demo by registering"
            />
          </MuiBox>
        </MuiGrid>
      </BsRow>

      <BsRow jc="center">
        {biz.activety.map((activety) => (
          <MuiGrid item xs={12} sm={12} md={3} lg={3} key={activety.head}>
            <MuiBox
              m={{
                xs: "0.5rem",
                sm: "0.5rem",
                md: "8rem 1rem 5rem",
                lg: "8rem 1rem 5rem",
              }}
            >
              <ActivetCart activety={activety} />
            </MuiBox>
          </MuiGrid>
        ))}
      </BsRow>
      <BsRow jc="center">
        <MuiGrid item xs={11} sm={11} md={11} lg={11}>
          <MuiBox
            p={{
              xs: "0.5rem",
              sm: "0.5rem",
              md: "2rem 2rem 6rem",
              lg: "2rem 2rem 6rem",
            }}
          >
            <QuoteSlider quotes={bizQuotes.quotes} />
          </MuiBox>
        </MuiGrid>
      </BsRow>
    </div>
  );
}

export default HomeIndex;
