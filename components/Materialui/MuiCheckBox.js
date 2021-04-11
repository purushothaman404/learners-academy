import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const MuiCheckBox = ({ value, placeHolder, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={(event) => onChange(event.target.checked)}
          name="checkedB"
          color="primary"
        />
      }
      label={placeHolder}
    />
  );
};

export default MuiCheckBox;
