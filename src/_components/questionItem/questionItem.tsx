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
      sx={{
        padding: {
          sm: '10px 0',
          md: '18px 10px 18px 0',
          xl: '18px 24px 18px 0'
        }
      }}
    >
      <ListItemButton onClick={handleClick} sx={{ padding: 0 }}>
        <ListItemText primary={<span className={styles.title}>{question}</span>} sx={{ fontSize: '40px' }} />
        <img
          src='assets/icons/arrowUp.svg'
          alt='Arrow icon'
          style={{ transform: open ? '' : 'rotate(180deg)' }}
        />
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemText primary={<span className={styles.text}>{answer}</span>} />
        </List>
      </Collapse>
    </List>
  );
};
