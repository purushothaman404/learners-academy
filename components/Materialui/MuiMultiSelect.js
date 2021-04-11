import React from "react";
import {
  MenuItem,
  InputLabel,
  Select,
  TextField,
  OutlinedInput,
  Input,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const styles = makeStyles((theme) => ({
  root: {
    width: "70%",
    marginTop: "8px",
    marginBottom: "4px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  labelPosition: {
    marginTop: "-.65rem",
    marginLeft: "1rem",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MuiMultiSelect = ({
  value,
  placeHolder,
  onChange,
  onBlur,
  mapChildVal,
  variant,
  margin,
  ...res
}) => {
  const classes = styles();
  return (
    <>
      <FormControl className={classes.root}>
        <InputLabel
          id={`${placeHolder} mutiple-chip-label`}
          className={classes.labelPosition}
          required={res.required}
          error={res.error}
        >
          {placeHolder}
        </InputLabel>
        <Select
          labelId={`${placeHolder} mutiple-chip`}
          id={`${placeHolder} mutiple-chip-id`}
          multiple
          variant={variant}
          error={res.error}
          margin={margin}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={(event) => onBlur && onBlur(event.target.value)}
          input={
            <OutlinedInput
              margin="dense"
              label={placeHolder}
              key={`${placeHolder} mutiple-chip-id`}
              id={`${placeHolder} mutiple-chip-label-input`}
            />
          }
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((val) => (
                <Chip
                  key={val}
                  label={val}
                  onDelete={() => {}}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {mapChildVal.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

MuiMultiSelect.defaultProps = {
  variant: "outlined",
  margin: "dense",
};

export default MuiMultiSelect;
