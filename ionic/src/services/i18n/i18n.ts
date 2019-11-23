import T from 'i18n-react';
import Dal from '../../dal/Dal';
import { DalImpl } from '../../dal/DalImpl';
import en from '../../i18n/en.json';
import es from '../../i18n/es.json';
import fr from '../../i18n/fr.json';


function init(): void {
    const dal: Dal = new DalImpl();

    dal.getItems("preferences/langue", new Date("2019-01-16"), new Date()).then((lang: any) => {
        if (!lang || !lang[0] || !lang[0].value) {
            T.setTexts(fr);
        } else if (lang[0].value == "fr") {
            T.setTexts(fr);
        } else if (lang[0].value == "es") {
            T.setTexts(es);
        } else if (lang[0].value == "en") {
            T.setTexts(en);
        } else {
            T.setTexts(fr);
        }
    })

}

function load(language: string): void {
    if (language == 'fr') {
        T.setTexts(fr)
    } else if (language == 'en') {
        T.setTexts(en)
    } else if (language == 'es') {
        T.setTexts(es)
    } else {
        T.setTexts(fr)
    }
}

export { init, load };

