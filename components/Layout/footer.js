import React from "react";
import { Container, Row } from "react-bootstrap";
import Router from "next/router";
import { MuiBox, BsRow, MuiGrid, MuiList } from "../Materialui";
import styled from "styled-components";

const FooterContainer = styled.div`
  // background-image: url(/carousal1.jpg);
  background-size: cover;
`;

const FooterContent = styled.div`
  opacity: 0.95;
  background-color: #24272a;
  background-size: cover;
`;

function Footer() {
  return (
    <FooterContainer className="footer" id="contact">
      <FooterContent>
        <MuiBox
          m={{ xs: "0 5rem", sm: "0 5rem", md: "0 10rem", lg: "0 10rem" }}
        >
          <BsRow>
            <MuiGrid
              item
              m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className="quick links"
            >
              <MuiGrid
                item
                m={{ xs: "auto", sm: "auto", md: "auto", lg: "auto" }}
              >
                <MuiList title={"Quick links"} txtColor={"white"}>
                  {[
                    <a
                      onClick={() => Router.push("/")}
                      style={{ cursor: "pointer", color: "white" }}
                      key="home"
                    >
                      Home
                    </a>,
                    <a
                      onClick={() => Router.push("/aboutus")}
                      style={{ cursor: "pointer", color: "white" }}
                      key="About"
                    >
                      About us
                    </a>,
                    <a
                      onClick={() =>
                        Router.push(
                          "/registration?role=student",
                          "/registration/student"
                        )
                      }
                      style={{ cursor: "pointer", color: "white" }}
                      key="Student"
                    >
                      Student Register
                    </a>,
                    <a
                      onClick={() =>
                        Router.push(
                          "/registration?role=staff",
                          "/registration/staff"
                        )
                      }
                      style={{ cursor: "pointer", color: "white" }}
                      key="Teacher"
                    >
                      Teacher Register
                    </a>,
               <a style=
               {{ cursor: "pointer", color: "white"}}
                target="_blank"
                onClick={() =>
                        Router.push(
                          "/terms-and-conditions"
                          )}
                 key="Terms"
                 >Terms and Conditions</a>
                      ,
                    
                  ]}
                </MuiList>
              </MuiGrid>
            </MuiGrid>
            <MuiGrid
              item
              m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className="contact links"
            >
              <MuiGrid
                item
                m={{ xs: "auto", sm: "auto", md: "auto", lg: "auto" }}
              >
                <MuiList title={"Contact Us"} txtColor={"white"}>
                  {[
                    <a
                      href="tel: +910000000000"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        textDecoration: "none",
                      }}
                      key="mobile"
                    >
                      +91 00000 00000
                    </a>,
                    <a
                      href="mailto:steeplearning@gmail.com"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        textDecoration: "none",
                      }}
                      key="mail"
                    >
                      steeplearning@gmail.com
                    </a>,
                  ]}
                </MuiList>
              </MuiGrid>
            </MuiGrid>
            <MuiGrid
              item
              m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className="visit links"
            >
              <MuiGrid
                item
                m={{ xs: "auto", sm: "auto", md: "auto", lg: "auto" }}
              >
                <MuiList title={"Visit Us"} txtColor={"white"}>
                  {[
                    <a style={{ color: "white" }} key="address">
                      No:36, LK Street, Chennai - 600037
                    </a>,
                  ]}
                </MuiList>
              </MuiGrid>
            </MuiGrid>
          </BsRow>
          <BsRow jc="center">
            <div style={{ color: "white",textAlign : "center" }}>
              © 2020 Copyright: steeplearning.com
            </div>
          </BsRow>
        </MuiBox>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
