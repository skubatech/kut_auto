import React, {FC} from "react";
import styles from "./contacts.module.scss";
import { Connect } from "../connect";

export const Contacts:FC = () => {
    return <div className={`container ${styles.wrapper}`}>
        <h4 className={styles.title}>КОНТАКТЫ</h4>
        <div className={styles.contacts}>
        <Connect />
        <img src="assets/icons/map.png" alt="Map"/>
        </div>

    </div>
}