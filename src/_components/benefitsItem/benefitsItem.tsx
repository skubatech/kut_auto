import React, {FC} from "react";
import styles from "./benefitsItem.module.scss";

interface Props  {
    title: string;
    icon: string;
}

export const BenefitsItem:FC<Props> = ({ title, icon}) => {
    return <div className={styles.wrapper}>
        <img src={icon} alt="Icon"/>
        <div className={styles.info}>
            <span className={styles.title}>{title}</span>
        </div>
    </div>
}