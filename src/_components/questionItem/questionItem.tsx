import React, { FC, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import styles from './questionItem.module.scss';

interface Props {
  question: string;
  answer: string;
}

export const QuestionItem: FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component='div'
      aria-labelledby='nested-list-subheader'
      className={styles.wrapper}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={question} />
        {open ? (
          <img src='assets/icons/arrowUp.svg' alt='Arrow icon' />
        ) : (
          <img src='assets/icons/arrowDown.svg' alt='Arrow icon' />
        )}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemText primary={answer} />
        </List>
      </Collapse>
    </List>
  );
};
