import { Plugins } from '@capacitor/core';
import Dal from './Dal';
import Item from './model/item';
import { Value } from './model/value';
import { DateWrapperImpl } from './dateWrapper/dateWrapperImpl';
import DateWrapper from './dateWrapper/dateWrapper';

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
        const dateWrapper: DateWrapper = new DateWrapperImpl(date);
        const dateTime = dateWrapper.getDateTime();
        const timestampMs = dateWrapper.getTimestampMs();
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
        items = this._filterBetweenDates(items, begin, end);
        return items;
    }

    private _filterBetweenDates(items: Item[], begin: Date, end: Date) {
        items = items.filter(
            (x: any) => {
                let dateWrapper = new DateWrapperImpl(new Date(x.dateTime));
                dateWrapper.setTimestampMs(x.timestampMs);
                return dateWrapper.isBetweenDates(begin, end);
            }
        );
        return items;
    }

    // private _betweenDates(date: Date, begin: Date, end: Date) {
    //     return this._sameDate(date, begin) 
    //         || this._sameDate(date, end)
    //         || (date > begin && date < end);

    // }

    async getLatestItems(key: string, begin: Date, end: Date) {
        let items = await this.getItems(key, begin, end);
        let res: any = this._filterLatestItemsBetweenDates(items, begin, end);
        return res;
    }

    private _filterLatestItemsBetweenDates(items: Item[], begin: Date, end: Date  ) {
        let res: Item[] = [];
        let endLimit = new Date(end.getTime());
        endLimit.setDate(endLimit.getDate() + 1);

        for (let iterDate = begin; iterDate <= endLimit; iterDate.setDate(iterDate.getDate() + 1)) {
            let filteredItems = items.filter(
                (x: Item) => {
                    let dateWrapper = new DateWrapperImpl(new Date(x.dateTime));
                    dateWrapper.setTimestampMs(x.timestampMs);
                    return dateWrapper.isSameDate(iterDate);
                }
            );
            if (filteredItems.length !== 0) {
                res.push(filteredItems[filteredItems.length - 1]);
            }
        }
        return res;
    }

    // private _sameDate(date1: Date, date2: Date) {
    //     return date1.toLocaleDateString() === date2.toLocaleDateString();
    // }

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
        items = this._filterItemsSameDate(items, date);
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[items.length - 1];
        return value;
    }

    private _filterItemsSameDate(items: Item[], date: Date) {
        // items = items.filter((x: any) => this._sameDate(new Date(x.dateTime), date));
        items = items.filter(
            (x: Item) => {
                let dateWrapper = new DateWrapperImpl(new Date(x.dateTime));
                dateWrapper.setTimestampMs(x.timestampMs);
                return dateWrapper.isSameDate(date);
            }
        );
        return items;
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
