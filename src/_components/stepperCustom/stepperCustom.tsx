import React, { FC } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import { StepContent } from '@mui/material';
import { steps } from './stepperCustom.constants';
import styles from './stepperCustom.module.scss';
import { StepperDescription } from '../stepperDescription';


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
      {steps.map((item, i) => (
        <Step key={item.title} active>
          <StepLabel StepIconComponent={colorlibStepIcon}>
            <h5 className={styles.title}>{item.title}</h5>
          </StepLabel>
          <StepContent>
            <StepperDescription description={item.description} timeText={item.timeText} key={i}/>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
