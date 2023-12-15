import React, {FC, useRef} from "react";
import styles from "./tittle.module.scss";
import { Banner } from "../banner";

export const Title:FC = () => {
    return <div className={`container ${styles.wrapper}`}>
        <img
            className={styles.img}
            src="assets/icons/bannerCar.png"
            alt="Banner car"
        />
        <Banner />
    </div>
}