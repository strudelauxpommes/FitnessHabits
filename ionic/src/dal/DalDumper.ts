import Dal from './Dal';
import { DalImpl } from './DalImpl';

export class DalDumper {

    async dump(dal: any = null) {
        dal = dal || new DalImpl();
        const result: { [key: string]: any } = {};
        const keys = await dal.keys();
        for (let key of keys) {
            result[key] = await dal.getAllItems(key);
        }
        return result;
    }
}
