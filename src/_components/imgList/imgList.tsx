import React, { FC, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';
import styles from './imgList.module.scss';
import { Feedback, feedbackList, imgData } from './imgList.constants';
import { DialogCustom } from '../dialogCustom';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImgList: FC = () => {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [feedback, setFeedback] = useState<Feedback>(null);

  const handleClickOpen = (id: string) => {
    setOpen(true);
    setDialogTitle(id);
    setFeedback(feedbackList[id]);
  };
  const handleClose = () => {
    setOpen(false);
    setDialogTitle('');
    setFeedback(null);
  };

  return (
    <ImageList variant='quilted' cols={4} gap={0} sx={{ marginTop: '60px' }}>
      {imgData.map((item, i) => (
        <ImageListItem
          key={i}
          cols={item.cols || 1}
          rows={item.rows || 1}
          onClick={() => handleClickOpen(item.title)}
          id={item.title}
          sx={{ cursor: 'pointer' }}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading='lazy'
            className={styles.imgItem}
          />
          <ImageListItemBar
            sx={{
              padding: '32px 0 0 27px',
              background: 'none',
              '.MuiImageListItemBar-titleWrap': {
                padding: 0,
              },
            }}
            subtitle={<span className={styles.subTitle}>{item.subTitle}</span>}
            title={<span className={styles.title}>{item.title}</span>}
            position='top'
            actionPosition='left'
          />
        </ImageListItem>
      ))}
      <DialogCustom
        open={open}
        onClose={handleClose}
        sx={{
          padding: '50px 46px',
          maxWidth: '900px',
          width: '852px',
          overflow: 'hidden',
          borderRadius: '20px',
          border: '4px solid #19FBDF',
          boxShadow: '0px 0px 50px 5px rgba(184, 184, 184, 0.25)',
        }}
      >
        <div className={styles.titleWrap}>
          <h5 className={styles.titleCar}>{dialogTitle}</h5>
          <button className={styles.btn} onClick={handleClose}>
            <img src='assets/icons/close.svg' alt='Icon' />
          </button>
        </div>
        {feedback && (
          <>
            <iframe
              width='760px'
              height='427px '
              src={feedback.link}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              style={{ borderRadius: '13px' }}
            ></iframe>
            <div className={styles.feedbackWrap}>
              <div className={styles.nameWrap}>
                <span className={styles.name}>{feedback.name}</span>
                <img src={'assets/icons/starIcon.svg'} alt='Star icon' />
                <img src={'assets/icons/starIcon.svg'} alt='Star icon' />
                <img src={'assets/icons/starIcon.svg'} alt='Star icon' />
                <img src={'assets/icons/starIcon.svg'} alt='Star icon' />
                <img src={'assets/icons/starIcon.svg'} alt='Star icon' />
              </div>
              <span className={styles.content}>{feedback.content}</span>
            </div>
          </>
        )}
      </DialogCustom>
    </ImageList>
  );
};
