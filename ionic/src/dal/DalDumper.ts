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

    async dumpFilter(begin: Date, end: Date, blackListKeys: Array<string>, dal: any = null) {
        dal = dal || new DalImpl();
        const result: { [key: string]: any } = {};
        const keys = await dal.keys();
        const filteredKeys = this._difference(keys, blackListKeys)
        for (let key of filteredKeys) {
            result[key] = await dal.getValues(key, begin, end);
        }
        return result;
    }

    _difference(lhs: Array<string>, rhs: Array<string>) {
        return lhs.filter(function(n) {
            return rhs.indexOf(n) < 0;
        });
    }
}
