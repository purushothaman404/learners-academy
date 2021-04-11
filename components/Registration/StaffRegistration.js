import React, { useState } from "react";
import { Grid, Container, Box, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserServ from "../../commons/userServ";
import validator from "validator";
import { toast } from "react-toastify";
import {
  MuiTextField,
  MuiButton,
  MuiRadioBtn,
  MuiDropDown,
  MuiMultiSelect,
  MuiCheckBox,
  MuiChooseFile,
  BsRow,
  MuiBox,
} from "../Materialui";
import { CircularProgress } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "0.7rem",
  },
  webcolor: {
    color: "#4B7FCF",
  },
  terms : {
    opacity : 0.7,
    margin : "2rem 0rem"

  }
}));

const StaffDetailField = (prop) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      item
      m={{ xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
      xs={prop.col.xs}
      sm={prop.col.sm}
      md={prop.col.md}
      lg={prop.col.lg}
    >
      {prop.children}
    </Grid>
  );
};

function TeacherForm() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("Male");
  const [qualifications, setQualifications] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [subject, setSubject] = useState([]);
  const [internetFec, setInternetFec] = useState("");
  const [workingType, setWorkingType] = useState("");
  const [isDigitalPen, setIsDigitalPen] = useState(false);
  const [preferredTime, setPreferredTime] = useState("");
  const [resume, setResume] = useState("");
  const [higestQualification, setHigestQualification] = useState("");
  const [idProof, setIdProof] = useState("");
  const [source, setSource] = useState("");
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
    "Computer courses",
    "Programming",
    "History",
    "Geography",
    "Economics",
    "English",
    "Tamil",
    "French",
    "German",
  ];

  
  function verifyOtp() {
    const formData = new FormData();
    formData.append('otp_id',otp_id)
    formData.append('otp',otp)
    formData.append('role','teacher')
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
      name,
      experience,
      gender,
      qualifications,
      email,
      contactNumber,
      skypeId,
      internetFec,
      workingType,
      preferredTime,
      subject,
      isDigitalPen,
      resume,
      higestQualification,
      idProof,
      whatsappNumber,
      city,
      state,
      pin,
      country,
    ].forEach((e) => {
      //debugger;
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
      isError = true;
    }
    if (isTcChecked && !isError && !emptyVal) {
      const requestBody = {
        name,
        experience,
        gender,
        qualifications,
        email,
        contactNumber,
        skypeId,
        internetFec,
        workingType,
        preferredTime,
        subject,
        resume,
        isDigitalPen,
        higestQualification,
        idProof,
        source,
        city,
        state,
        pin,
        country,
      };

      const formData = new FormData();
      formData.append("Resume", resume);
      formData.append("IdProof", idProof);
      formData.append("HigestQualification", higestQualification);
      formData.append("name", name);
      formData.append("experience", experience);
      formData.append("gender", gender);
      formData.append("qualifications", qualifications);
      formData.append("email", email);
      formData.append("contactNumber", contactNumber);
      formData.append("whatsappNumber", whatsappNumber);
      formData.append("skypeId", skypeId);
      formData.append("internetFacility", internetFec);
      formData.append("workingType", workingType);
      formData.append("isDigitalPen", isDigitalPen);
      formData.append("preferredTime", preferredTime);
      formData.append("subject", subject);
      formData.append("source", source);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pin", pin);
      formData.append("country", country);
      setIsLoading(true);

      UserServ.addteacher(formData)
      .then((result) => {
        setIsLoading(false);
        if (result.data.success === true) {
          setOtpId(result.data.otp_id);
           toast.info("Enter OTP to confirm registration");
          setSuccess(result);
          setIsOtp(true);
        } else {
          toast.error(`${result.data.msg} .\n Registration failed!`);
        }
      })
      .catch((e) => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);

      let e = {};
      resume.length === 0
        ? (e = { ...e, isResumeError: true })
        : (e = { ...e, isResumeError: false });
      idProof.length === 0
        ? (e = { ...e, isIdentityError: true })
        : (e = { ...e, isIdentityError: false });
      higestQualification.length === 0
        ? (e = { ...e, isQualificationError: true })
        : (e = { ...e, isQualificationError: false });
      setError({ ...error, ...e });
      emptyVal ? setErrorType("emptyVal") : setErrorType("other");
    }
    setIsLoading(false);
  }

  function onClearClick() {
    setName("");
    setGender("Male");
    setEmail("");
    setContactNumber("");
    setWhatsappNumber("");
    setSkypeId("");
    setQualifications("");
    setExperience("");
    setSubject([]);
    setWorkingType("Part Time");
    setInternetFec("Yes");
    setIsDigitalPen("No");
    setPreferredTime("Flexible");
    setResume("");
    setHigestQualification("");
    setSource("");
    //  setPlace("");
    setCity("");
    setState("");
    setIdProof("");
    setPin("");
    setCountry("");
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
        m={{ xs: "1rem", sm: "1rem", md: "3rem", lg: "3rem" }}
        xs={12}
        sm={12}
        md={10}
        lg={10}
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
<h2 className={classes.webcolor}>Staff Registration</h2>
</label>
</BsRow>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="Name"
                    value={name}
                    label={`Name`}
                    error={error?.isNameError}
                    required={error?.isNameError}
                    onBlur={(value) =>
                      /^[a-zA-Z ]*$/.test(value) && value.length > 0
                        ? setError({ ...error, isNameError: false })
                        : setError({ ...error, isNameError: true })
                    }
                    onChange={(value) => {
                      setName(value);
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="qualifications"
                    value={qualifications}
                    label={`Qualifications`}
                    error={error?.isQualificationsError}
                    required={error?.isQualificationsError}
                    onBlur={(value) =>
                      /^[a-zA-Z0-9.-_ ]*$/.test(value) && value.length > 0
                        ? setError({ ...error, isQualificationsError: false })
                        : setError({ ...error, isQualificationsError: true })
                    }
                    onChange={(value) => {
                      setQualifications(value);
                    }}
                    inputProps={{
                      maxLength: 100,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="Experience"
                    value={experience}
                    label={`Experience`}
                    error={error?.isExperienceError}
                    required={error?.isExperienceError}
                    onBlur={(value) =>
                      /^[a-zA-Z0-9.-_ ]*$/.test(value) && value.length > 0
                        ? setError({ ...error, isExperienceError: false })
                        : setError({ ...error, isExperienceError: true })
                    }
                    onChange={(value) => {
                      setExperience(value);
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                <BsRow>
                  <MuiRadioBtn
                    placeHolder={`Gender`}
                    name={"genser1"}
                    mapChildVal={["Male", "Female", "Other"]}
                    onChange={(value) => setGender(value)}
                    value={gender}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
                <MuiBox
                  m={{
                    xs: "0",
                    sm: "0",
                    md: "1.5rem 0 0",
                    lg: "1.5rem 0 0",
                  }}
                >
                  <BsRow jc="center">
                    <MuiMultiSelect
                      onChange={(value) => setSubject(value)}
                      value={subject}
                      placeHolder={"Subject"}
                      error={error?.isSubjectError}
                      required={error?.isSubjectError}
                      onBlur={(value) =>
                        Object.keys(value).length > 0
                          ? setError({ ...error, isSubjectError: false })
                          : setError({ ...error, isSubjectError: true })
                      }
                      mapChildVal={subs}
                    />
                  </BsRow>
                </MuiBox>
              </StaffDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="contactnumber"
                    value={contactNumber}
                    label={`Contact number`}
                    error={error?.isContactnumberError}
                    required={error?.isContactnumberError}
                    onBlur={(value) =>
                      validator.isNumeric(value) && value.length >= 10
                        ? setError({ ...error, isContactnumberError: false })
                        : setError({ ...error, isContactnumberError: true })
                    }
                    onChange={(value) => {
                      (validator.isNumeric(value) || value.replace(/ /g, '').length === 0) && setContactNumber(value.replace(/ /g, ''));
                    }}
                    inputProps={{
                      maxLength: 15,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="whatsapp number"
                    value={whatsappNumber}
                    label={`whatsapp number`}
                    error={error?.isWhatsappnumberError}
                    required={error?.isWhatsappnumberError}
                    onBlur={(value) =>
                      validator.isNumeric(value) && value.length >= 10
                        ? setError({ ...error, isWhatsappnumberError: false })
                        : setError({ ...error, isWhatsappnumberError: true })
                    }
                    onChange={(value) => {
                      (validator.isNumeric(value) || value.replace(/ /g, '').length === 0) && setWhatsappNumber(value.replace(/ /g, ''));
                    }}
                    inputProps={{
                      maxLength: 15,
                    }}
                  />
                </BsRow>
              </StaffDetailField>

              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="EmailId"
                    value={email}
                    label={`E-mail Id`}
                    error={error?.isEmailIdError}
                    required={error?.isEmailIdError}
                    onBlur={(value) =>
                      validator.isEmail(value)
                        ? setError({ ...error, isEmailIdError: false })
                        : setError({ ...error, isEmailIdError: true })
                    }
                    onChange={(value) => {
                      setEmail(value);
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="SkypeId"
                    value={skypeId}
                    label={`Skype Id`}
                    error={error?.isSkypeIdError}
                    required={error?.isSkypeIdError}
                    onBlur={(value) =>
                      !validator.isEmpty(value)
                        ? setError({ ...error, isSkypeIdError: false })
                        : setError({ ...error, isSkypeIdError: true })
                    }
                    onChange={(value) => {
                      setSkypeId(value);
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow>
                  <MuiRadioBtn
                    placeHolder={`Do you have high Speed Internet Connection?`}
                    name={"Internet conn"}
                    mapChildVal={["Yes", "No"]}
                    onChange={(value) => setInternetFec(value)}
                    value={internetFec}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow>
                  <MuiRadioBtn
                    placeHolder={`Preferred Time`}
                    name={"Preferred Time"}
                    mapChildVal={["Morning", "Night", "Flexible"]}
                    onChange={(value) => setPreferredTime(value)}
                    value={preferredTime}
                  />
                </BsRow>
              </StaffDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                <BsRow>
                  <MuiRadioBtn
                    placeHolder={`Working Type`}
                    name={"Working Type"}
                    mapChildVal={["Full Time", "Part Time"]}
                    onChange={(value) => setWorkingType(value)}
                    value={workingType}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
                <BsRow>
                  <MuiRadioBtn
                    placeHolder={`Do you have digital pen ?`}
                    name={"digital pen"}
                    mapChildVal={["Yes", "No"]}
                    onChange={(value) => setIsDigitalPen(value)}
                    value={isDigitalPen}
                  />
                </BsRow>
              </StaffDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <div style={{ margin: "0 1rem" }}>
                    <MuiChooseFile
                      btnPlaceHolder={"Choose File"}
                      placeHolder={`Attach Resume`}
                      onChange={(value) => setResume(value)}
                      error={error?.isResumeError}
                      required={error?.isResumeError}
                    />
                  </div>
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <div style={{ margin: "0 1rem" }}>
                    <MuiChooseFile
                      btnPlaceHolder={"Choose File"}
                      placeHolder={`Attach Identity Proof`}
                      onChange={(value) => setIdProof(value)}
                      error={error?.isIdentityError}
                      required={error?.isIdentityError}
                    />
                  </div>
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <div style={{ margin: "0 1rem" }}>
                    <MuiChooseFile
                      btnPlaceHolder={"Choose File"}
                      placeHolder={`Attach Highest Qualification`}
                      onChange={(value) => setHigestQualification(value)}
                      error={error?.isQualificationError}
                      required={error?.isQualificationError}
                    />
                  </div>
                </BsRow>
              </StaffDetailField>
            </BsRow>
          </Grid>
          <Grid className={classes.root}>
            <BsRow jc="center">
              <StaffDetailField col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="city"
                    value={city}
                    label={`City`}
                    error={error?.isCityError}
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
                      maxLength: 40,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="state"
                    value={state}
                    label={`State`}
                    error={error?.isStateError}
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
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="pin"
                    value={pin}
                    label={`Postal Code`}
                    error={error?.isPinError}
                    required={error?.isPinError}
                    onBlur={(value) =>
                      !validator.isEmpty(value)
                        ? setError({ ...error, isPinError: false })
                        : setError({ ...error, isPinError: true })
                    }
                    onChange={(value) => {
                      setPin(value);
                    }}
                    inputProps={{
                      maxLength: 6,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                <BsRow jc="center">
                  <MuiTextField
                    className="Country"
                    value={country}
                    label={`Country`}
                    error={error?.isCountryError}
                    required={error?.isCountryError}
                    onBlur={(value) =>
                      validator.isAlpha(value)
                        ? setError({ ...error, isCountryError: false })
                        : setError({ ...error, isCountryError: true })
                    }
                    onChange={(value) => {
                      setCountry(value);
                    }}
                    inputProps={{
                      maxLength: 30,
                    }}
                  />
                </BsRow>
              </StaffDetailField>
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
                    value={source}
                    error={false}
                    multiline
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
          <Grid
            item
            m={{
              xs: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
            }}
          >
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
                <StaffDetailField col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
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
                </StaffDetailField>
                <StaffDetailField col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                  <BsRow jc="center">{renderButtons()}</BsRow>
                </StaffDetailField>
              </BsRow>
              <StaffDetailField col={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
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
              </StaffDetailField>
            </>
          )}
          {!isOtp && renderButtons()}
        </Box>
      </Grid>
    </BsRow>
  );
}

export default TeacherForm;
