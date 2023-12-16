import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, {FC} from "react";

export const CustomRadio: FC = () => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <FormControlLabel value='female' control={<Radio />} label='Female' />
      </RadioGroup>
    </FormControl>
  );
};
