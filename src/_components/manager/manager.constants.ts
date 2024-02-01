
type Links = {
    whats: string,
    telegram: string,
    phoneLink: string,
    phone: string,
}

type cities = 'Москва' | 'Нижний Новгород' | 'Минск'
export const citiesLinks: { [key in cities]: Links }= {
    'Москва': {
        whats: 'https://wa.me/79154243000',
        telegram: 'https://t.me/kut_auto_msk',
        phoneLink: 'tel:+7-915-424-30-00',
        phone: '+7 (915)-424-30-00',
    },
    'Нижний Новгород': {
        whats: 'https://wa.me/79611110501',
        telegram: 'https://t.me/kut_auto_nn',
        phoneLink: 'tel:+7-961-111-05-01',
        phone: '+7 (961) 111-05-01',
    },
    'Минск': {
        whats: 'https://wa.me/375259564276',
        telegram: 'https://t.me/kutauto',
        phoneLink: 'tel:+375-25-956-42-76',
        phone: '+375 (25) 956-42-76',
    }
}