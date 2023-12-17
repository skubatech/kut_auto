import React, { FC } from "react";
import styles from './socialItem.module.scss';

interface Props {
    imgSrc: string;
    imgAlt: string;
    href: string
}

export const SocialItem:FC<Props> = ({ href, imgSrc, imgAlt }) => {
    return <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={imgAlt}/>
    </a>
}