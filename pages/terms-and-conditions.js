import React from "react";
// import MainHome from "../../components/Layout/MainHome";
import MainHome from "../components/Layout/MainHome";
import { MuiBox, BsRow, MuiGrid } from "../components/Materialui";
// import { MuiBox, BsRow, MuiGrid } from "../../components/Materialui";
import { makeStyles } from "@material-ui/core/styles";
import { borderLeft } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  webcolor: {
    color: "#4B7FCF",
  },
}));

function Terms() {
  const classes = useStyles();

  return (
    <MainHome className="homecontainer">
      <BsRow jc="center">
        <MuiGrid item xs={12} sm={12} md={7} lg={7}>
          <MuiBox m={{ xs: "1rem", sm: "1rem", md: "3rem", lg: "3rem" }}>
             <h2 className="quote">Terms and Conditions</h2> 
            <div className="text-wrap">
              <h4 className={classes.webcolor}> Introduction</h4>
              Welcome to Steep Learning!

These terms and conditions outline the rules and regulations for the use of Steep Learning's Website, located at steeplearning.com.

By accessing this website we assume you accept these terms and conditions.
<br/> Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions.
<br/> “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves.
<br/>All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of
 our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands.
 <br/> Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.<br /> <br />
              <h4 className={classes.webcolor}>Restrictions</h4>
              <h5 className={classes.webcolor}></h5>
              You are specifically restricted from all of the following:

publishing any Website material in any other media;
selling, <br />sublicensing and/or otherwise commercializing any Website material;<br />
publicly performing and/or showing any Website material;<br />
using this Website in any way that is or may be damaging to this Website;<br />
using this Website in any way that impacts user access to this Website;<br />
using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
<br />
engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
using this Website to engage in any advertising or marketing.
Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.

 <br /> <br />
              <h4 className={classes.webcolor}>Privacy policy</h4>
              Yours privacy matters the most to us and we ensure that all the information that you provide
              are stored in a safe and secure manner
              </div>
          </MuiBox>
        </MuiGrid>
      </BsRow>
    </MainHome>
  );
}

export default Terms;
