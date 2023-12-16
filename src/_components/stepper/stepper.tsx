import React, { FC } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import { StepContent, Typography } from '@mui/material';
import { steps } from './stepper.constants';


const colorlibStepIcon = (props: StepIconProps) => {
  const { className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <img src='assets/icons/user.svg' />,
    2: <img src='assets/icons/paper.svg' />,
    3: <img src='assets/icons/directory.svg' />,
    4: <img src='assets/icons/pen.svg' />,
    5: <img src='assets/icons/car.svg' />,
  };

  return <div className={className}>{icons[String(props.icon)]}</div>;
};

export const StepperCustom: FC = () => {
  return (
    <Stepper
      orientation='vertical'
      sx={{
        marginTop: '60px',
        '.MuiStepContent-root': {
          borderColor: '#6CC0E6',
        },
        '.MuiStepConnector-line': {
          borderColor: '#6CC0E6',
        },
      }}
    >
      {steps.map((item) => (
        <Step key={item.label} active>
          <StepLabel StepIconComponent={colorlibStepIcon}>
            <Typography>{item.label}</Typography>
          </StepLabel>
          <StepContent>
            <Typography>{item.description}</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
