import { DalImpl } from './DalImpl';

export class DalDumper {

    async dump(dal) {
        dal = dal || new DalImpl();
        const result = {};
        const keys = await dal.keys();
        for (let key of keys) {
            result[key] = await dal.getAllItems(key);
        }
        return JSON.stringify(result);
    }
} 
