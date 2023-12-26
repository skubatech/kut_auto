import React, { FC } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import { StepContent } from '@mui/material';
import { steps } from './stepperCustom.constants';
import styles from './stepperCustom.module.scss';
import { StepperDescription } from '../stepperDescription';
import cn from 'classnames';

const colorlibStepIcon = (props: StepIconProps) => {
  const icons: { [index: string]: React.ReactElement } = {
    1: <img src='assets/icons/user.svg' />,
    2: <img src='assets/icons/paper.svg' />,
    3: <img src='assets/icons/search.svg' />,
    4: <img src='assets/icons/car.svg' />,
    5: <img src='assets/icons/prepayment.svg' />,
    6: <img src='assets/icons/delivery.svg' />,
    7: <img src='assets/icons/obtaining.svg' />,
    8: <img src='assets/icons/payment.svg' />,
  };

  return <div>{icons[String(props.icon)]}</div>;
};

export const StepperCustom: FC = () => {
  return (
    <Stepper
      orientation='vertical'
      sx={{
        '.MuiStepContent-root': {
          borderColor: '#6CC0E6',
        },
        '.MuiStepConnector-line': {
          borderColor: '#6CC0E6',
        },
      }}
      className={styles.wrapper}
    >
      {steps.map((item, i) => (
        <Step key={item.title} active>
          <StepLabel StepIconComponent={colorlibStepIcon}>
            <h5 className={cn(styles.title, { [styles.titleBig]: i === 1 })}>{item.title}</h5>
          </StepLabel>
          <StepContent>
            <StepperDescription description={item.description} descriptionItems={item.descriptionItems} key={i}/>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
