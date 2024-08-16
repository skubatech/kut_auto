import React, {FC, useState} from 'react';
import styles from './calculatorExample.module.scss';
import {type} from '@testing-library/user-event/dist/type';
import {ButtonCustom} from '../button';
import {CustomInput} from '../customInput';
import {CalculationLoading} from '../calculationLoading';

interface Props {
    type?: 'europe' | 'korea';
}

export const CalculatorExample = ({ type }: Props) => {
    // const [openModal, setOpenModal] = useState(false);
    // const [form, setForm] = useState({
    //     link: ''
    // });
    // const [error, setError] = useState(false);
    //
    // const handleOpenTest = () => {
    //     setOpenModal(true);
    // }
    //
    // const handleCloseTest = () => {
    //     setOpenModal(false);
    // }
    //
    // const onChange = (fieldId: string, value: string) => {
    //     setForm({
    //         ...form,
    //         [fieldId]: value,
    //     });
    // };
  return (
      // <div className={styles.wrapper}>
      //     <span className={styles.title}>Расчет по ссылке</span>
      //     {
      //         type === 'europe' ? (
      //             <span className={styles.description}>Вставьте ссылку c <a href={'https://mobile.de/'} target="_blank"
      //                                        rel="noopener noreferrer">mobile.de</a> и мы посчитаем стоимость автомобиля с таможней и доставкой</span>
      //         )
      //             :
      //             (
      //                 <span className={styles.description}>Вставьте ссылку c <a href={'https://encar.com/'} target="_blank"
      //                                            rel="noopener noreferrer">encar.com</a> и мы посчитаем стоимость автомобиля с таможней и доставкой</span>
      //
      //             )
      //     }
      //     <CustomInput
      //         placeholder='Вставьте ссылку'
      //         id='link'
      //         value={form.link}
      //         error={form.link === '' && error}
      //         onChnage={onChange}
      //     />
      //     <ButtonCustom
      //         text='рассчитать'
      //         textTransform='uppercase'
      //         fontWeight={700}
      //         color
      //         className={styles.btn}
      //         onClick={handleOpenTest}
      //     />
      //     <CalculationLoading open={openModal} onClose={handleCloseTest} />
      // </div>
      <div className={styles.wrapper}>
          <video
              className={styles.video}
              src='assets/result.mp4'
              controls
              poster='assets/preview.png'
          ></video>
      </div>
  );
};
