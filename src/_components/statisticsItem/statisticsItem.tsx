import React, { FC } from "react";
import styles from './statisticsItem.module.scss';

interface Props {
    info: string,
    text: string
}

export const StatisticsItem:FC<Props> = ({info, text}) => {
    return <div className={styles.wrapper}>
        <span className={styles.info}>{info}</span>
        <span className={styles.text}>{text}</span>
    </div>
}