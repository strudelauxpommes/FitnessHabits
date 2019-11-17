import { Plugins } from '@capacitor/core';
import Dal from './Dal';
import Item from './model/item';
import { Value } from './model/value';

const { Storage } = Plugins;

export class DalImpl implements Dal {

    async setItem(key: string, value: Value) {
        await this.setItemByDate(key, value, new Date());
    }

    async setItemByDate(key: string, value: Value, date: Date) {
        let items: Item[] = await this.getAllItems(key);
        items = this._updateItem(items, date, value);
        await Storage.set({ key, value: JSON.stringify(items) });
    }

    private _updateItem(items: Item[], date: Date, value: Value): Item[] {
        const dateTime = date.getTime();
        const timestampMs = Date.now();
        let item: Item = { timestampMs, dateTime, value };
        items.push(item);
        return items;
    }

    async getAllItems(key: string): Promise<Item[]> {
        const { value: items } = await Storage.get({ key });
        if (items === undefined || items === null) {
            return [];
        } else {
            return JSON.parse(items);
        }
    }

    async getItems(key: string, begin: Date, end: Date) {
        let items: Item[] = await this.getAllItems(key);
        items = items.filter(
                    (x: any) => this._betweenDates(new Date(x.dateTime), begin, end)
                );
        return items;
    }

    private _betweenDates(date: Date, begin: Date, end: Date) {
        return this._sameDate(date, begin) 
            || this._sameDate(date, end)
            || (date > begin && date < end);

    }

    async getLatestItems(key: string, begin: Date, end: Date) {
        let items = await this.getItems(key, begin, end);
        let res: any = [];
        let endLimit = new Date(end.getTime());
        endLimit.setDate(endLimit.getDate() + 1)

        for(let iterDate = begin; iterDate <= endLimit; iterDate.setDate(iterDate.getDate() + 1)) {
            let filteredItems = items.filter(
                        (x: any) => this._sameDate(new Date(x.dateTime), iterDate)
                    );
            if (filteredItems.length !== 0) {
                res.push(filteredItems[filteredItems.length-1]);
            }
        }
        return res;
    }

    private _sameDate(date1: Date, date2: Date) {
        return date1.toLocaleDateString() === date2.toLocaleDateString();
    }

    async getLastValue(key: string) {
        const items = await this.getAllItems(key);
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[items.length - 1]; //items is always sorted by timestampMs
        return value;
    }

    async getValue(key: string, date: Date) {
        let items = await this.getAllItems(key);
        items = items.filter(
                (x: any) => {
                    let dateToFilter = new Date(x.dateTime);
                    return dateToFilter.toLocaleDateString() === date.toLocaleDateString();
                }
            );
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[items.length - 1];
        return value;
    }

    async removeItem(key: string) {
        await Storage.remove({ key });
    }

    async keys() {
        const { keys } = await Storage.keys();
        return keys;
    }

    async clear() {
        await Storage.clear();
    }
}
