import React, { FC, forwardRef } from 'react';
import styles from './questions.module.scss';
import { QuestionItem } from '../questionItem';
import { questions } from './questions.contants';
import cn from 'classnames';

export const Questions = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div className={cn('container', styles.wrapper)} ref={ref}>
      <h5 className={styles.title}>часто задаваемые вопросы</h5>
      {questions.map((item, i) => (
        <QuestionItem question={item.question} answer={item.answer} key={i} />
      ))}
    </div>
  );
});
