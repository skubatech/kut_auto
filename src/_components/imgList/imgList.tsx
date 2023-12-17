import React, { FC } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';
import styles from './imgList.module.scss';
import { imgData } from './imgList.constants';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImgList:FC = () => {
  return (
    <ImageList
      variant="quilted"
      cols={4}
      gap={0}
      sx={{ marginTop: '60px' }}
    >
      {imgData.map((item, i) => (
        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
              sx={{
                padding: '32px 0 0 27px',
                background: 'none',
                '.MuiImageListItemBar-titleWrap': {
                    padding: 0
                  }
              }}
              subtitle={<span className={styles.subTitle}>{item.subTitle}</span>}
              title={<span className={styles.title}>{item.title}</span>}
              position="top"
              
              actionPosition="left"
            />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

