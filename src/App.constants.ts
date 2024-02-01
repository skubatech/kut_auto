const hash = window.location.hash;

export const redirects = {
    "Москва": hash ? '/#calculator' : '/',
    'Минск': hash ? '/minsk#calculator' :'/minsk',
    'Нижний Новгород': hash ? '/nn#calculator' : '/nn'
}

export const redirectsR = {
    '/': "Москва",
     '/minsk' : 'Минск',
     '/nn': 'Нижний Новгород',
}