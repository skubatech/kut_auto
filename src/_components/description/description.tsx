import React, {FC} from "react";
import styles from "./description.module.scss";
import { DescriptionItem } from "../descriptionItem";

const descriptions = [
    {
        title: 'В УСЛУГУ ВХОДИТ:',
        text: [
            'бесплaтную конcультaцию по вопроcу замены бумaжнoго ПТС на электрoнный',
            'рeгиcтрaцию ПТC в cиcтемe электpонных паспортов',
            'выдачу свидетельства о безопасности конструкции транспортного средства (СБКТС)',
            'установку кнопки ГЛОНАСС с договором от официального оператора ГЛОНАСС'
        ]
    },
    {
        title: 'НАШИ ПРЕИМУЩЕСТВА:',
        text: [
            'заключение официального договора',
            '100% ГАРАНТИЯ легитимности документов',
            'работа дистанционно со всеми регионами РФ',
            'несколько вариантов оплаты – наличными, безналичный расчет, переводы'
        ]
    }
]

export const Description:FC = () => {
    return <div className={styles.wrapper}>
        {
            descriptions.map((item, i) => (
                <DescriptionItem title={item.title} text={item.text} key={i}/>
            ))
        }
    </div>
}