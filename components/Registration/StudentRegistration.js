import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Grid, Container, Box, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import UserServ from "../../commons/userServ";
import validator from "validator";
import { toast } from "react-toastify";

import MuiAlert from '@material-ui/lab/Alert';

import {
  MuiTextField,
  MuiButton,
  MuiRadioBtn,
  MuiDropDown,
  MuiMultiSelect,
  MuiCheckBox,
  BsRow,
  MuiBox,
} from "../Materialui";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "0.7rem",
  },
  webcolor: {
    color: "#4B7FCF",
  },
}));

const StudentDetailField = (prop) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      item
      m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
      xs={12}
      sm={12}
      md={5}
      lg={5}
    >
      {prop.children}
    </Grid>
  );
};
function StudentForm() {
  const classes = useStyles();
  const [studentName, setStudentName] = useState("");
  const [parentName, setParentName] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [subject, setSubject] = useState([]);
  const [grade, setGrade] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [education, setEducation] = useState("");
  const [source, setSource] = useState("");
  // const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [isTcChecked, setIsTcChecked] = useState(false);
  const [success, setSuccess] = useState({});
  const [error, setError] = useState({});
  const [errorType, setErrorType] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtp, setIsOtp] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otp_id,setOtpId] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const subs = [
    "Maths",
    "physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Economics",
    "English",
    "Tamil",
    "French",
   ];
  const grades = [
    "Primary(I - V)",
    "Middle(VI - VIII)",
    "Secondary(IX-X)",
    "Higher Secondary(XI-XII)",
  ];

  function verifyOtp() {
    const formData = new FormData();
    formData.append('otp_id',otp_id)
    formData.append('otp',otp)
    formData.append('role','student')
    setIsLoading(true);

    UserServ.verifyOTP(formData)
    .then((result) => {
      setIsLoading(false);
      if (result.data.success === true) {
         toast.info("Registration successful!");
        setSuccess(result);
        setIsOtp(false);
      } else {
        toast.error(`${result.data.msg}\n  Registration failed! `);
      }
      setOtp("")

    })
    .catch((e) => {
      setIsLoading(false);
      setOtp("")

    });

  }

  async function onSubmitClick() {
    setErrorType("");
    setIsLoading(true);
    let isError = false;
    let emptyVal = false;
    [
      studentName,
      parentName,
      gender,
      age,
      email,
      subject,
      contactNumber,
      whatsappNumber,
      preferredTime,
      skypeId,
      grade,
      //  place,
      city,
      state,
      pin,
      country,
    ].forEach((e) => {
      if (e.length === 0) {
        emptyVal = true;
      }
    });

    if (Object.keys(error).length > 0) {
      Object.keys(error).forEach((e) => {
        if (error[e] === true) {
          isError = true;
        }
      });
    } else {
      emptyVal = true;
    }

    if (isTcChecked && !isError && !emptyVal) {
      const requestBody = {
        studentName,
        parentName,
        gender,
        age,
        email,
        contactNumber,
        whatsappNumber,
        preferredTime,
        skypeId,
        subject,
        grade,
        education,
        source,
        //  place,
        city,
        state,
        pin,
        country,
      };

      const formData = new FormData();
      formData.append("studentName", studentName);
      formData.append("parentName", parentName);
      formData.append("gender", gender);
      formData.append("age", age);
      formData.append("email", email);
      formData.append("contactNumber", contactNumber);
      formData.append("skypeId", skypeId);
      formData.append("whatsappNumber", whatsappNumber);
      formData.append("grade", grade);
      formData.append("education", education);
      formData.append("preferredTime", preferredTime);
      formData.append("subject", subject);
      formData.append("source", source);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pin", pin);
      formData.append("country", country);

      UserServ.addStudent(formData)
        .then((result) => {
          setIsLoading(false);
          if (result.data.success === true) {
            setOtpId(result.data.otp_id);
             toast.info("Enter OTP to confirm registration");
            setSuccess(result);
            setIsOtp(true);
          } else {
            toast.error(`${result.data.msg}\n Registration failed!`);
          }
        })
        .catch((e) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      emptyVal ? setErrorType("emptyVal") : setErrorType("other");
    }
  }

  function onClearClick() {
    setStudentName("");
    setParentName("");
    setGender("Male");
    setAge("");
    setEmail("");
    setContactNumber("");
    setWhatsappNumber("");
    setSkypeId("");
    setSubject([]);
    setGrade("");
    setEducation("");
    setSource("");
    //  setPlace("");
    setCity("");
    setState("");
    setPin("");
    setIsTcChecked(false);
    setSuccess({});
    setError({});
    setErrorType("");
    setIsOtp(false);
  }

  function renderButtons() {
    return (
      <Grid
        item
        className={classes.root}
        m={{ xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" }}
        style={{ display: "inline" }}
      >
        <BsRow jc="center">
          {!isLoading ? (
            <>
              <div style={{ margin: "0 1rem" }}>
                <MuiButton
                  className="submit"
                  size="medium"
                  variant="contained"
                  color="primary"
                  onClick={() => (isOtp ? verifyOtp() : onSubmitClick())}
                >
                  {isOtp ? "VERIFY OTP" : `SUBMIT`}
                </MuiButton>
              </div>
              <div style={{ margin: "0 1rem" }}>
                <MuiButton
                  className="submit"
                  size="medium"
                  variant="contained"
                  onClick={() => (isOtp ? setIsOtp(false) : onClearClick())}
                >
                  {isOtp ? "CLOSE" : `CLEAR`}
                </MuiButton>
              </div>
            </>
          ) : (
            <CircularProgress size={20} thickness={4} />
          )}
        </BsRow>
      </Grid>
    );
  }

  return (
    <BsRow jc="center">
      <Grid
        className={classes.root}
        item
        m={{ xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" }}
        xs={12}
        sm={12}
        md={7}
        lg={7}
      >
        <Box boxShadow={3} style={{ width: "auto", height: "auto" }}>
        <BsRow jc="center">
<label
style={{
fontSize: "1rem",
fontWeight: 500,
margin: "2rem 0.35rem 0.35rem",
textAlign: "center",
justifyContent: "center",
}}
>
<h2 className={classes.webcolor}>Student Registration</h2>
</label>
 </BsRow>
          <Grid className={classes.root}> 
            <MuiBox
              m={{ xs: "1rem", sm: "1rem", md: "0 0 0 5rem", lg: "0 0 0 5rem" }}
            >
              <label
                style={{
                  fontSize: ".5rem",
                  fontWeight: 300,
                  marginTop: "1rem",
                }}
                // margin="dense"
                // shrink={true}
              >
                <h3 className={classes.webcolor}>Personal Details</h3>
              </label>
            </MuiBox>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow jc="center">
              <MuiTextField
                    className="StudentName"
                    value={studentName}
                    error={error?.isStudentNameError}
                    required={error?.isStudentNameError}
                    label={`Student Name`}
                    onBlur={(value) =>
                      /^[a-zA-Z ]*$/.test(value) && value.length > 0
                        ? setError({ ...error, isStudentNameError: false })
                        : setError({ ...error, isStudentNameError: true })
                    }
                    onChange={(value) => {
                      setStudentName(value);
                    }}
                    inputProps={{
                      maxLength: 100,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="ParentName"
                    value={parentName}
                    required={error?.isParentNameError}
                    error={error?.isParentNameError}
                    label={`Parent Name`}
                    onBlur={(value) =>
                      /^[a-zA-Z ]*$/.test(value) && value.length > 0
                        ? setError({ ...error, isParentNameError: false })
                        : setError({ ...error, isParentNameError: true })
                    }
                    onChange={(value) => {
                      setParentName(value);
                    }}
                    inputProps={{
                      maxLength: 100,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow>
                  <MuiRadioBtn
                    key="ad"
                    placeHolder={`Gender`}
                    name={"genser1"}
                    mapChildVal={["Male", "Female", "Other"]}
                    onChange={(value) => setGender(value)}
                    value={gender}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <MuiBox
                  m={{
                    xs: "0",
                    sm: "0",
                    md: "1.5rem 0 0",
                    lg: "1.5rem 0 0",
                  }}
                >
                  <BsRow jc="center">
                    <MuiTextField
                      className="Age"
                      value={age}
                      required={error.isAgeError}
                      error={error.isAgeError}
                      label={`Age`}
                      onBlur={(value) =>
                        validator.isNumeric(value)
                          ? setError({ ...error, isAgeError: false })
                          : setError({ ...error, isAgeError: true })
                      }
                      onChange={(value) => {
                        validator.isNumeric(value) && setAge(value);
                      }}
                      inputProps={{
                        maxLength: 2,
                      }}
                    />
                  </BsRow>
                </MuiBox>
              </StudentDetailField>
            </BsRow>
          </Grid>

          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="mail"
                    value={email}
                    error={error?.isEmailError}
                    label={`E-mail`}
                    required={error?.isEmailError}
                    onBlur={(value) =>
                      validator.isEmail(value)
                        ? setError({ ...error, isEmailError: false })
                        : setError({ ...error, isEmailError: true })
                    }
                    onChange={(value) => {
                      setEmail(value);
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="Contactnumber"
                    value={contactNumber}
                    error={error?.isContactNumberError}
                    required={error?.isContactNumberError}
                    label={`Contact Number`}
                    onBlur={(value) =>
                      validator.isNumeric(value) && value.length >= 10
                        ? setError({ ...error, isContactNumberError: false })
                        : setError({ ...error, isContactNumberError: true })
                    }
                    onChange={(value) => {
                      (validator.isNumeric(value) || value.replace(/ /g, '').length === 0) && setContactNumber(value.replace(/ /g, ''));
                    }}
                    inputProps={{
                      maxLength: 15,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
            </BsRow>
          </Grid>

          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="WhatsappNumber"
                    value={whatsappNumber}
                    error={error?.isWhatsappNumberError}
                    required={error?.isWhatsappNumberError}
                    label={`Whatsapp Number`}
                    onBlur={(value) =>
                      validator.isNumeric(value) && value.length >= 10
                        ? setError({ ...error, isWhatsappNumberError: false })
                        : setError({ ...error, isWhatsappNumberError: true })
                    }
                    onChange={(value) => {
                      (validator.isNumeric(value) || value.replace(/ /g, '').length === 0) && setWhatsappNumber(value.replace(/ /g, ''));
                    }}
                    inputProps={{
                      maxLength: 15,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="skype"
                    value={skypeId}
                    error={error?.isSkypeError}
                    required={error?.isSkypeError}
                    onBlur={(value) =>
                      !validator.isEmpty(value)
                        ? setError({ ...error, isSkypeError: false })
                        : setError({ ...error, isSkypeError: true })
                    }
                    label={`Skype id`}
                    onChange={(value) => {
                      setSkypeId(value);
                    }}
                    inputProps={{
                      maxLength: 60,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="school"
                    value={education}
                    error={false}
                    label={`School/College/University`}
                    onChange={(value) => {
                      setEducation(value);
                    }}
                    inputProps={{
                      maxLength: 100,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField></StudentDetailField>
            </BsRow>
          </Grid>
          <MuiBox
            m={{ xs: "1rem", sm: "1rem", md: "0 0 0 5rem", lg: "0 0 0 5rem" }}
          >
          <label
            style={{
              fontSize: ".5rem",
              fontWeight: 300,
              marginTop: "1rem",
            }}
            // margin="dense"
            // shrink={true}
          >
            <h3 className={classes.webcolor}>Course Registration Details</h3>
          </label>
          </MuiBox>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiDropDown
                    value={grade}
                    placeHolder={`Grade`}
                    required={error?.isGradeError}
                    error={error?.isGradeError}
                    onBlur={(value) =>
                      !validator.isEmpty(value)
                        ? setError({ ...error, isGradeError: false })
                        : setError({ ...error, isGradeError: true })
                    }
                    onChange={(value) => setGrade(value)}
                    mapChildVal={grades}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiMultiSelect
                    required={error?.isSubjectError}
                    error={error?.isSubjectError}
                    onBlur={(value) =>
                      Object.keys(value).length > 0
                        ? setError({ ...error, isSubjectError: false })
                        : setError({ ...error, isSubjectError: true })
                    }
                    onChange={(value) => setSubject(value)}
                    value={subject}
                    placeHolder={"Subject"}
                    mapChildVal={subs}
                  />
                </BsRow>
              </StudentDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow>
                  <MuiRadioBtn
                    placeHolder={`Preferred Time`}
                    name={"Preferred Time"}
                    mapChildVal={["Morning", "Night", "Flexible"]}
                    onChange={(value) => setPreferredTime(value)}
                    value={preferredTime}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField></StudentDetailField>
            </BsRow>
          </Grid>

          <Grid className={classes.root}>
            <MuiBox
              m={{ xs: "1rem", sm: "1rem", md: "0 0 0 5rem", lg: "0 0 0 5rem" }}
            >

<label
            style={{
              fontSize: ".5rem",
              fontWeight: 300,
              marginTop: "1rem",
            }}
            // margin="dense"
            // shrink={true}
          >
            <h3 className={classes.webcolor}>Address Details</h3>
          </label>
            </MuiBox>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="city"
                    value={city}
                    error={error?.isCityError}
                    label={`City`}
                    required={error?.isCityError}
                    onBlur={(value) =>
                      !validator.isEmpty(value)
                        ? setError({ ...error, isCityError: false })
                        : setError({ ...error, isCityError: true })
                    }
                    onChange={(value) => {
                      setCity(value);
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                </BsRow>
              </StudentDetailField>

              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="state"
                    value={state}
                    error={error?.isStateError}
                    label={`State`}
                    required={error?.isStateError}
                    onBlur={(value) =>
                      !validator.isEmpty(value)
                        ? setError({ ...error, isStateError: false })
                        : setError({ ...error, isStateError: true })
                    }
                    onChange={(value) => {
                      setState(value);
                    }}
                    inputProps={{
                      maxLength: 40,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
            </BsRow>
          </Grid>

          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="country"
                    value={country}
                    error={error?.isCountryError}
                    required={error?.isCountryError}
                    onBlur={(value) =>
                      validator.isAlpha(value)
                        ? setError({ ...error, isCountryError: false })
                        : setError({ ...error, isCountryError: true })
                    }
                    label={`Country`}
                    onChange={(value) => {
                      setCountry(value);
                    }}
                    inputProps={{
                      maxLength: 40,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
              <StudentDetailField>
                <BsRow jc="center">
                  <MuiTextField
                    className="pin"
                    value={pin}
                    error={error?.isPinError}
                    required={error?.isPinError}
                    onBlur={(value) =>
                      validator.isNumeric(value)
                        ? setError({ ...error, isPinError: false })
                        : setError({ ...error, isPinError: true })
                    }
                    label={`Postal Code`}
                    onChange={(value) => {
                      setPin(value);
                    }}
                    inputProps={{
                      maxLength: 6,
                    }}
                  />
                </BsRow>
              </StudentDetailField>
            </BsRow>
          </Grid>

          <Grid className={classes.root}>
            <BsRow jc="center">
              <StudentDetailField></StudentDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <Grid
                className={classes.root}
                item
                m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
                xs={12}
                sm={12}
                md={11}
                lg={11}
              >
                <BsRow jc="center">
                  <MuiTextField
                    className="source"
                    variant="standard"
                    rowsMax={4}
                    rows={2}
                    multiline
                    value={source}
                    error={false}
                    label={`How do you Know Steep Learning ?`}
                    onChange={(value) => {
                      setSource(value);
                    }}
                    inputProps={{
                      maxLength: 250,
                    }}
                  />
                </BsRow>
              </Grid>
            </BsRow>
          </Grid>
          <Grid
            item
            m={{
              xs: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
            }}
          >
            <Box
              m={{
                xs: "1rem",
                sm: "1rem",
                md: "1rem 1rem 1rem 5rem",
                lg: "1rem 1rem 1rem 5rem",
              }}
            >
            <BsRow>              <MuiCheckBox
              onChange={(value) => setIsTcChecked(value)}
              value={isTcChecked}
              placeHolder={`I agree to the the `}
            />
                <a style={{ marginTop:"0.45rem" ,textDecoration: "underline", cursor: "pointer" }} target="_blank" href="/terms-and-conditions">Terms and Conditions.</a>
            </BsRow>
            </Box>
          </Grid>
          {errorType && (
            <MuiBox
              m={{ xs: "1rem", sm: "1rem", md: "0 0 2rem 0", lg: "0 0 2rem 0" }}
            >
              <BsRow jc="center">
                <InputLabel
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                  margin="dense"
                  error
                >
                  Please fill all mandatory fields!
                </InputLabel>
              </BsRow>
            </MuiBox>
          )}
          {isOtp && (
            <>
              <BsRow jc="center">
                <StudentDetailField col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                  <BsRow jc="center">
                    <MuiTextField
                      className="otp"
                      value={otp}
                      label={`Enter OTP`}
                      onChange={(value) => {
                        setOtp(value);
                      }}
                      error={otpError ? true : false}
                      helperText={otpError && otpError}
                      inputProps={{
                        maxLength: 100,
                      }}
                    />
                  </BsRow>
                </StudentDetailField>
                <StudentDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <BsRow jc="center">{renderButtons()}</BsRow>
                </StudentDetailField>
              </BsRow>
              <StudentDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <label
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      justifyContent: "center",
                      textAlign: "center",
                      color: "#d3d3d3",
                    }}
                  >
                    {`OTP has been sent to Email ${email}`}
                  </label>
                </BsRow>
              </StudentDetailField>
            </>
          )}

          {!isOtp && renderButtons()}
        </Box>
      </Grid>
    </BsRow>
  );
}

export default StudentForm;
