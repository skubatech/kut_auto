import React, {FC} from "react";
import cn from 'classnames';
import styles from "./buttonCustom.module.scss";
interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    text: string;
    fontSize?: number | 14;
    fontWeight?: 400 | 500 | 600 | 700;
    textTransform: 'none' | 'uppercase';
    color?: boolean;
    onClick?: () => void
}

export const ButtonCustom:FC<Props> = ({text, fontSize, fontWeight, textTransform, color, onClick, ...props}) => {
    return <button
        style={{ fontSize, fontWeight, textTransform }}
        className={cn(styles.btn, { [styles.btnColor]: color, [styles.btnWhite]: !color })}
        onClick={onClick}
        {...props}
    >
        <span className={cn({ [styles.text]: color, [styles.textWhite]: !color })}>{text}</span>
    </button>
}