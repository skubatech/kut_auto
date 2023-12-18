import React, {FC, useRef} from "react";
import styles from "./tittle.module.scss";
import { Banner } from "../banner";
import cn from 'classnames';

interface Props {
    scrollTo: (num: number) => void
}

export const Title:FC<Props> = ({scrollTo}) => {
    return <div className={cn('container', styles.wrapper)}>
        <div className={styles.test}>
        <img
            className={styles.img}
            src="assets/icons/bannerCar.png"
            alt="Banner car"
        />
        </div>
        <Banner scrollTo={scrollTo}/>
    </div>
}