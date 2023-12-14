import React, {FC} from "react";
import styles from "./descriptionItem.module.scss";

interface Props {
    title: string;
    text: string[];
}

export const DescriptionItem:FC<Props> = ({ title, text }) => {
    return <div className={styles.wrapper}>
        <span className={styles.title}>{title}</span>
        <ul className={styles.list}>
            {
                text.map((item, i) => (
                    <li className={styles.marker} key={i}>{item}</li>
                ))
            }
        </ul>
    </div>
}