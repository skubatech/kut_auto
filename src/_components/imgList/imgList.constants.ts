export const imgData = [
  {
    img: 'assets/icons/x4.png',
    title: 'BMW X4',
    subTitle: 'Lorem ipsum dolor sit amet consectetur.',
    rows: 1,
    cols: 1,
  },
  {
    img: 'assets/icons/golf.png',
    title: 'VW Golf Alltrack',
    subTitle: 'Lorem ipsum dolor sit amet consectetur..',
    rows: 1,
    cols: 2,
  },
  {
    img: 'assets/icons/gls.png',
    title: 'MB GLS',
    subTitle: 'Lorem ipsum dolor sit amet consectetur..',
    rows: 1,
    cols: 1,
  },
  {
    img: 'assets/icons/x5.png',
    title: 'BMW X5 G05',

    subTitle: 'Lorem ipsum dolor sit amet consectetur..',
    cols: 2,
    rows: 3,
  },
  {
    img: 'assets/icons/cx5.png',
    title: 'Mazda CX-5',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    cols: 1,
    rows: 2,
  },
  {
    img: 'assets/icons/tesla.png',
    title: 'Tesla Model 3',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    rows: 3,
    cols: 1,
  },
  {
    img: 'assets/icons/a6.png',
    title: 'Audi A6',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    cols: 1,
    rows: 1,
  },
];

export const imgDataSm = [
  {
    img: 'assets/icons/gls.png',
    title: 'MB GLS',
    subTitle: 'Lorem ipsum dolor sit amet consectetur..',
    rows: 1,
    cols: 1,
  },
  {
    img: 'assets/icons/a6.png',
    title: 'Audi A6',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    cols: 1,
    rows: 1,
  },
  {
    img: 'assets/icons/x5.png',
    title: 'BMW X5 G05',

    subTitle: 'Lorem ipsum dolor sit amet consectetur..',
    cols: 1,
    rows: 3,
  },
];

export const imgDataMd = [
  {
    img: 'assets/icons/x4.png',
    title: 'BMW X4',
    subTitle: 'Lorem ipsum dolor sit amet consectetur.',
    rows: 2,
    cols: 2,
  },
  {
    img: 'assets/icons/gls.png',
    title: 'MB GLS',
    subTitle: 'Lorem ipsum dolor sit amet consectetur..',
    rows: 2,
    cols: 1,
  },
  {
    img: 'assets/icons/cx5.png',
    title: 'Mazda CX-5',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    cols: 1,
    rows: 1,
  },
  {
    img: 'assets/icons/tesla.png',
    title: 'Tesla Model 3',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    rows: 1,
    cols: 1,
  },
  {
    img: 'assets/icons/a6.png',
    title: 'Audi A6',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus fringilla nunc urna aliquet.',
    cols: 1,
    rows: 1,
  },
];

export interface Feedback {
  link: string,
  name: string,
  content: string
}

export const feedbackList:Record<string, Feedback> = {
  'VW Golf Alltrack': {
    link: 'https://www.youtube.com/embed/GsdtMufwdk0?si=oUgWX041MkH0xjNW',
    name: 'Владимир',
    content: 'Обратился с заказом авто из Германии. С первого общения подкупила полная клиентоориентированность. Плюс крайне лояльные условия при заказе. Можно сказать эксклюзивные для рынка. Обговорили мои хотелки. Сбросил сам несколько ссылок на авто в Германии. Собственно одну из этих авто и купили после проверки. Мои рекомендации. Просто все отлично. Пять баллов. Скорость, условия, общение.'
  },
  'Mazda CX-5': {
    link: 'https://www.youtube.com/embed/KQA50UQe_v0?si=JOAXw_2AUNNAwo2p',
    name: 'Руслан',
    content: 'В январе 2023 г. обратился в компанию для подбора автомобиля, общался с Василием и Никитой, учитывая бюджет и запросы, остановились на Мазда CX 5 2,5 в максимальной комплектации. На подбор по времени ушло порядка 3 недель: нашли авто в максималке с пробегом 50 тыс. в достойном состоянии. Ребята всегда на связи и готовы ответить на все интересующие вопросы по телефону и в телеграмм. Большое вам спасибо! Рекомендую!'
  },
  'BMW X4': {
    link: 'https://www.youtube.com/embed/rfXAfHpUXE8?si=PMVjQWfujSDA33JZ&amp;start=414',
    name: 'Сергей',
    content: 'Спасибо огромное ребятам,Илье и Никите за подбор авто из Германии! Меньше недели ожидания и готовое авто меня ждет в Минске.Отдельно хотелось бы отменить момент коммуникации,всегда были на связи,сами давали обратную связь,в наше время это редкость. Когда забирал машину,дали советы по обратной дороге в РФ и план действий по постановке на учёт. И хотелось бы так же сказать спасибо от меня и супруги за подарок в виде 4 баночек пива,хорошее быстро заканчивается:) Очень рад был знакомству,жму руку 🤝 Всем советую,смело обращайтесь к ребятам!'
  },
  'Audi A6': {
    link: 'https://www.youtube.com/embed/71UR2mSNsq0?si=Ha3v2E_eIAeS2gBI&amp;start=520',
    name: 'Иннокентий',
    content: 'Хорошие ребята из Автоподбора Кут, могут помочь во всем связанном с автомобилями и не только, рекомендую своим друзьям, как реально надежных проводников в мире машин. Вася и Никита , спасибо!'
  },
  'BMW X5 G05': {
    link: 'https://www.youtube.com/embed/aV7_YCTFCrk?si=mIi3QKzHpFtdvkgG&amp;start=401',
    name: 'Денис',
    content: 'Ребята привезли отличную машину на перепродажу, нареканий не было обнаружено, спасибо большое!'
  },
  'MB GLS': {
    link: 'https://www.youtube.com/embed/-cMgRtrL4eA?si=WY3ag8qs69CagAbD&amp;start=337',
    name: 'Дмитрий',
    content: 'Обратился с заказом авто из Германии. С первого общения подкупила полная клиентоориентированность. Плюс крайне лояльные условия при заказе. Можно сказать эксклюзивные для рынка. Обговорили мои хотелки. Сбросил сам несколько ссылок на авто в Германии. Собственно одну из этих авто и купили после проверки. Мои рекомендации. Просто все отлично. Пять баллов. Скорость, условия, общение.'
  },
  'Tesla Model 3': {
    link: 'https://www.youtube.com/embed/li6c4gBCHwo?si=xvNW9ZB5Vd2GtHO4&amp;start=537',
    name: 'Алексей',
    content: 'Обращался за подбором автомобиля впервые. Было недоверие к работе автоподбрщиков, поэтому решил присутствовать лично. Работой остался доволен. Были обнаружены даже мелкие нюансы о которых хозяин не знал, либо хотел скрыть. Ребята молодцы!'
  }
}