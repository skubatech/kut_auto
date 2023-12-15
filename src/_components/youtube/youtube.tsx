import React, {FC} from "react";
import styles from "./youtube.module.scss";

export const Youtube:FC = () => {
    return <div className={`container ${styles.wrapper}`}>
    <h4 className={styles.title}>мы в youtube</h4>
    </div>
}