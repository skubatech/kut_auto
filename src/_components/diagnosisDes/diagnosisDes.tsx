import React, {FC} from "react";
import styles from "./diagnosisDes.module.scss";
import { DiagnosisDesItem } from "../diagnosisDesItem";

interface DiagnosisValue {
    imgSrc: string;
    imgAlt: string;
    title: string;
    text: string;
}

interface Props {
    values: DiagnosisValue[];
}

export const DiagnosisDes:FC<Props> = ({ values }) => {
    return <div className={styles.wrapper}>
        {
            values.map((item, i) => (
                <DiagnosisDesItem imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title} text={item.text} key={i} />
            ))
        }
    </div>
}