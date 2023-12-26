import React, { FC, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar, useMediaQuery, useTheme } from '@mui/material';
import styles from './imgList.module.scss';
import { Feedback, feedbackList, imgData, imgDataMd, imgDataSm } from './imgList.constants';
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
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

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

  const getImageList = () => {
    if (isXs) {
      return imgDataSm;
    }

    if (isMd) {
      return imgDataMd;
    }

    return imgData;
  }

  const getColumnsCount = () => {
    if (isXs) {
      return 1;
    }

    if (isMd) {
      return 3;
    }

    return 4;
  }

  return (
    <ImageList
      variant='quilted'
      gap={0}
      cols={getColumnsCount()}
      className={styles.list}
    >
      {getImageList().map((item, i) => (
        <ImageListItem
          key={i}
          cols={item.cols || 1}
          rows={item.rows || 1}
          onClick={() => handleClickOpen(item.title)}
          id={item.title}
          sx={{ cursor: 'pointer', overflow: 'hidden' }}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading='lazy'
            className={styles.imgItem}
          />
          <ImageListItemBar
            sx={{
              padding: {
                sm: '18px 0 0 10px',
                md: '22px 0 0 16px',
                lg: '32px 0 0 27px'
              },
              background: 'none',
              '.MuiImageListItemBar-titleWrap': {
                padding: 0,
              },
            }}
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
              className={styles.video}
              src={feedback.link}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              style={{  }}
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
