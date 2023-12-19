import React, {FC} from "react";
import styles from "./connectItem.module.scss";

interface Props {
    imgSrc: string;
    imgAlt: string;
    url: string;
    text: string;
}

export const ConnectItem:FC<Props> = ({ imgSrc, imgAlt, url, text }) => {
    return <div className={styles.wrapper}>
      <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={imgAlt} />
        {text}
      </a>
    </div>
}