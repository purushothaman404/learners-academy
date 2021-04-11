import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import { Fab, TextField } from "@material-ui/core";
import { BsRow, MuiGrid } from "./index";

const MuiChooseFile = (props) => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState(false);
  const [size, setSize] = useState(0);
  return (
    <BsRow>
      <label htmlFor={props.placeHolder}>
        <BsRow jc="center">
          <InputLabel
            error={props.error}
            required={props.error && props.required}
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            {props.placeHolder}
          </InputLabel>
        </BsRow>
        <BsRow jc="center">
          <TextField
            style={{ display: "none" }}
            id={props.placeHolder}
            name={props.placeHolder}
            type="file"
            onChange={(event) => {
              // const fileReader = new FileReader();
              console.log(
                "121 file upload1 ",
                event.target.files,
                event.target.files[0]
              );

              if (
                event.target.files &&
                event.target.files[0] &&
                Math.trunc(event.target.files[0].size / 1024) <= 2000
              ) {
                setError(false);
                setSize(0);
                setFileName(event.target.files[0].name);
                // fileReader.readAsDataURL(event.target.files[0]);
                // fileReader.onload = (e) => {
                //   console.log("121 file upload", e.target.result);
                //   props.onChange(e.target.result);
                // };
                props.onChange(event.target.files[0]);
              } else if (Math.trunc(event.target.files[0].size / 1024) > 2000) {
                setError(true);
                setSize(Math.trunc(event.target.files[0].size / 1024));
              }
            }}
          />
          <Fab
            color="primary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
          >
            <AddIcon /> {props.btnPlaceHolder}
          </Fab>
        </BsRow>
        <BsRow jc="center">
          <InputLabel
            error={error}
            style={{ fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}
          >
            {error ? `File size is ${(size / 1000).toFixed(3)}Mb` : fileName}
          </InputLabel>
          {error && (
            <InputLabel
              error
              style={{ fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}
            >
              {`File size must be less than 2Mb`}
            </InputLabel>
          )}
        </BsRow>
      </label>
    </BsRow>
  );
};

export default MuiChooseFile;
