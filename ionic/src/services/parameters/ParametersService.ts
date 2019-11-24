import { DalImpl } from '../../dal/DalImpl'
import Dal from '../../dal/Dal';
import { init, load } from '../i18n/i18n'
const bd: Dal = new DalImpl();
export default class ParametersService {
    
    static async saveDefaults(){
        await Promise.all([
            bd.setValue("profil/nom", "Username"),
            bd.setValue("profil/taille", ""),
            bd.setValue("profil/dateNaissance", ""),
            bd.setValue("profil/sexe", "Homme"),
            bd.setValue("preferences/unitePoids", "kg"),
            bd.setValue("preferences/uniteGlycemie", "mmol/L"),
            bd.setValue("preferences/uniteTaille", "cm"),
            bd.setValue("preferences/uniteBreuvages", "mL"),
            bd.setValue("preferences/uniteTotalBreuvages", "mL"),
            bd.setValue("preferences/uniteAlcool", "mL"),
            bd.setValue("preferences/quantiteIncrementAlcool", "1.0"),
            bd.setValue("preferences/quantiteIncrementBreuvages", "1.0"),
            bd.setValue("preferences/formatDate", "AAAA-MM-JJ"),
            bd.setValue("preferences/langue", "24h"),
            bd.setValue("preferences/listeRepas", "['dejeuner', 'collationAM', 'dîner', 'collationPM', 'souper','collationSoir']"),
            bd.setValue("preferences/listeHumeurs", "['Super','bonne humeur', 'Neutre', 'Grognon', 'Fatigué','Dépressif']")
       ]);
       load("en");
    };

    async saveWeight(poids: string) {
        bd.setValue("preferences/unitePoids", poids);
    }

    async saveHeight(taille: string) {
        bd.setValue("preferences/uniteTaille", taille);
    }

    async saveGlucose(glycemie: string) {
        bd.setValue("preferences/uniteGlycemie", glycemie);
    }

    async saveAlcool(alcool: string) {
        bd.setValue("preferences/uniteAlcool", alcool);
    }

    async saveBeverages(breuvages: string) {
        bd.setValue("preferences/uniteBreuvages", breuvages);
    }

    async saveTotalBeverages(totalBreuvages: string) {
        bd.setValue("preferences/uniteTotalBreuvages", totalBreuvages);
    }

    async saveAlcoolIncrement(incrementAlcool: string) {
        bd.setValue("preferences/quantiteIncrementAlcool", incrementAlcool);
    }

    async saveBeverageIncrement(incrementBreuvages: string) {
        bd.setValue("preferences/quantiteIncrementBreuvages", incrementBreuvages);
    }
}
