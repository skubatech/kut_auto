import React, {FC} from "react";
import styles from "./button.module.scss";
interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    text: string;
    fontSize?: number | 14;
    fontWeight?: 400 | 500 | 600 | 700;
    textTransform: 'none' | 'uppercase';
    color?: boolean;
}

export const Button:FC<Props> = ({text, fontSize, fontWeight, textTransform, color, ...props}) => {
    return <button
        style={{ fontSize, fontWeight, textTransform }}
        className={ color ? `${ styles.btn} ${styles.btnColor }` : `${ styles.btn} ${styles.btnWhite }`}
        {...props}
    >
        {text}
    </button>
}