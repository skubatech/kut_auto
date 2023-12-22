import React, {FC} from "react";
import styles from "./benefitsItem.module.scss";

interface Props  {
    title: string;
    description: string;
    icon: string;
}

export const BenefitsItem:FC<Props> = ({ title, description, icon}) => {
    return <div className={styles.wrapper}>
        <img src={icon} alt="Icon"/>
        <div className={styles.info}>
            <span className={styles.title}>{title}</span>
            {/* <span className={styles.description}>{description}</span> */}
        </div>
    </div>
}