export interface Cards {
  title: string,
  descrption: string,
  text: string[]
}

export const cards: Cards[] = [
  {
    title: `Осмотр \n одного авто `,
    descrption:
      'от 4 000 ₽',
    text: ['Оценка справедливой стоимости автомобиля.', 'Осмотр кузова, салона, электрики.', 'Компьютерная диагностика.', 'Рекомендации эксперта.', 'Отчет по осмотру автомобиля.', 'Аргументированный торг с продавцом.'],
  },
  {
    title: `Авто \n под ключ`,
    descrption:
      'От 60 000 ₽',
    text: ['Поиск автомобиля до результата.', 'Экономия личного времени и денег.', 'Осмотр кузова, салона, электрики и узлов.', 'Компьютерная диагностика.', 'Диагностика на СТО.', 'Рекомендации эксперта.', 'Сопровождение процесса покупки.', 'Контроль передачи денег и оформления документов.', 'Возможность получить лучший авто за свои деньги.'],
  },
  {
    title: `Эксперт \n на день`,
    descrption:
      'От 15 000 ₽',
    text: ['Осмотр кузова, салона, электрики и узлов.', 'Компьютерная диагностика.', 'Диагностика на СТО.', 'Рекомендации эксперта.', 'Неограниченное количество автомобилей в течение дня.', 'Перемещение на автомобиле эксперта.'],
  },
];
