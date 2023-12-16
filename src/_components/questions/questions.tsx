import React, { FC } from 'react';
import styles from './questions.module.scss';
import { QuestionItem } from '../questionItem';
import { questions } from './questions.contants';

export const Questions:FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
        <h5 className={styles.title}>
        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h5>
        {
            questions.map((item, i) => (
                <QuestionItem question={item.question} answer={item.answer} key={i}/>
            ))
        }
    </div>
  );
};
