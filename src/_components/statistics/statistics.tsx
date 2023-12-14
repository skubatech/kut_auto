import React, { FC } from "react";
import styles from './statistics.module.scss';
import { StatisticsItem } from "../statisticsItem";

const statistics = [
    {
        info: '93%',
        text: 'довольных клиентов'
    },
    {
        info: '6',
        text: 'обращений по гарантии'
    },
    {
        info: '2564+',
        text: 'подобранных авто'
    },
    {
        info: '12440+',
        text: 'отсмотренных авто'
    },
]

export const Statistics:FC = () => {
    return <div className={`container ${styles.wrapper}`}>
        {
            statistics.map((item, i) => (
                <StatisticsItem info={item.info} text={item.text} key={i}/>
                ))
        }
    </div>
}