import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "./footer";
import Router from "next/router";
import {
  MenuList,
  MenuItem,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "material-ui-search-bar";
import { ImportantDevices } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  btnMargin: {
    margin: "0 0.5rem",
  },
  paperStyle : {
    top : "2rem !important" ,
    position : "absolute"
  }
}));

export default function Main(props) {
  const [currentTab, setCurrentTab] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const classes = useStyle();
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    const pathCollection = ["home", "aboutus", "registration", "contact"];
    let pathName = window.location?.pathname;
    let finalPath = "";
    if (pathName) {
      let location = pathName.split("/");
      finalPath = location && location.length > 0 ? location[1] : "home";
    }
    setCurrentTab(pathCollection.includes(finalPath) ? finalPath : "home");
  }, []);

  // useEffect(() => {
  //   const pathCollection = ["home", "aboutus", "registration", "contact"];
  //   let pathName = window.location?.pathname.replace(/[/]/g, "");
  //   setCurrentTab(pathCollection.includes(pathName) ? pathName : "home");
  // }, []);

  function storeTab(path) {
    setCurrentTab(path);
  }
  const [searchvalue, setSearchValue] = useState("");
  console.log("121 happy now");
  return (
    <div className="App">
      <div
        style={{
          display: "block",
          backgroundColor: "#24272a",
          color: "white",
          opacity: 0.95,
          zIndex: 10,
        }}
      >
        <div className="col-md-12">
          <Navbar expand="lg">
            <div style={{ display: "flex" }}>
              <Navbar.Brand
                onClick={() => Router.push("/")}
                className="quote"
                style={{ cursor: "pointer" }}
              >
                <img
                  className="logo"
                 style={{ width: "7rem",height : "4rem" }}
                  src="/new-logo.png"
                  alt="Steep Learning"
                />
              </Navbar.Brand>
              <Navbar.Toggle style={{ right : "2px",position: "absolute",marginTop : "1rem"}}  aria-controls="basic-navbar-nav" variant="dark">
                <img  src="/open-menu.svg" width="40px"></img>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto"
                style={{ marginLeft : "3rem",color: "white", backgroundColor: "#24272a" }}
              >
                <Button
                  className={classes.btnMargin}
                  onClick={() => {
                    storeTab("home");
                    Router.push("/");
                  }}
                  style={{
                    color: "white",
                    border: currentTab === "home" ? "1px solid white" : "none",
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    whiteSpace: "nowrap",
                  }}
                  size="small"
                  variant="text"
                >
                  Home
                </Button>
                <Button
                  className={classes.btnMargin}
                  onClick={() => {
                    storeTab("aboutus");
                    Router.push("/aboutus");
                  }}
                  style={{
                    color: "white",
                    border:
                      currentTab === "aboutus" ? "1px solid white" : "none",
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    whiteSpace: "nowrap",
                  }}
                  size="small"
                  variant="text"
                >
                  About us
                </Button>
                <Button
                  ref={anchorRef}
                  className={classes.btnMargin}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                    setOpen((prevOpen) => !prevOpen);
                  }}
                  style={{
                    color: "white",
                    border:
                      currentTab === "registration"
                        ? "1px solid white"
                        : "none",
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    whiteSpace: "nowrap",
                  }}
                  size="small"
                  variant="text"
                >
                  Register
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  className = {classes.paperStyle}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",                            
                      }}
                    >
                      <Paper style={{ backgroundColor: "#FFF",display:"block"}}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList 
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem
                              onClick={(event) => {
                                handleClose(event);
                                storeTab("registration");
                                Router.push(
                                  "/registration?role=student",
                                  "/registration/student"
                                );
                              }}
                            >
                              Student
                            </MenuItem>
                            <MenuItem
                              onClick={(event) => {
                                handleClose(event);
                                storeTab("registration");
                                Router.push(
                                  "/registration?role=staff",
                                  "/registration/staff"
                                );
                              }}
                            >
                              Teacher
                            </MenuItem>
                            <MenuItem
                              onClick={(event) => {
                                handleClose(event);
                                storeTab("registration");
                                Router.push(
                                  "/registration?role=demo",
                                  "/registration/demo"
                                );
                              }}
                            >
                              Avail Free Demo
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>

                <Button
                  className={classes.btnMargin}
                  style={{
                    color: "white",
                    border:
                      currentTab === "contact" ? "1px solid white" : "none",
                    paddingLeft: "3%",
                    paddingRight: "6%",
                    whiteSpace: "nowrap",
                    zIndex : 0
                  }}
                  onClick={() => {
                    storeTab("contact");
                    Router.push("/#contact");
                  }}
                  size="small"
                  variant="text"
                >
                  Contact Us
                </Button>

                {/* <SearchBar
                  value={searchvalue}
                  style={{ color: "#4B7FCF" }}
                  onChange={(value) => {
                    setSearchValue(value);
                  }}
                  // onRequestSearch={(value) => {
                  //   setSearchValue(value);
                  // }}
                /> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      {props.children}

      <Footer />
    </div>
  );
}
