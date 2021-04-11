import React from "react";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import { BsRow, MuiGrid } from "./index";
const MuiRadioBtn = ({
  className,
  value,
  name,
  placeHolder,
  onChange,
  mapChildVal,
}) => {
  let i = 0;
  return (
    <MuiGrid key={`${placeHolder} ${i++}`}>
      <BsRow>
        <InputLabel style={{ fontSize: "1rem", fontWeight: 500 }} shrink={true}>
          {placeHolder}
        </InputLabel>
      </BsRow>
      <BsRow>
        <RadioGroup
          name={name}
          style={{ display: "contents" }}
          key={`${placeHolder} rg`}
        >
          {mapChildVal.map((mcv) => (
            <div id={mcv} key={`${i++} chd`}>
              <Radio
                key={`${i++} child`}
                color="primary"
                if={mcv}
                checked={mcv === value}
                onChange={(event) => onChange(event.target.value)}
                value={mcv}
                className={`${className}${mcv}`}
                inputProps={{ "aria-label": "Radio A" }}
              />
              <span>{mcv}</span>
            </div>
          ))}
        </RadioGroup>
      </BsRow>
    </MuiGrid>
  );
};

export default MuiRadioBtn;
