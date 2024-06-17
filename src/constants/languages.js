const languages = {
    en: {
        code: 'en',
        name: 'English',
        flagImage: '/images/en_flag.svg',
        translations: require('../localization/en.json')
    },
    hr: {
        code: 'hr',
        name: 'Croatian',
        flagImage: '/images/hr_flag.svg',
        translations: require('../localization/hr.json')
    },
    de: {
        code: 'de',
        name: 'German',
        flagImage: '/images/de_flag.svg',
        translations: require('../localization/de.json')
    }
};

export default languages;