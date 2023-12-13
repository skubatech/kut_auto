import React, {FC} from "react";
import styles from "./example.module.scss"
interface Props  {
    title: string;
}
export const Example:FC<Props> = ({title}) => {
    return <section className={styles.root}>{title}</section>
}