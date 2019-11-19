import { Plugins } from '@capacitor/core';
import Dal from './Dal';
import Item from './model/item';
import { Value } from './model/value';
import { DateWrapperImpl } from './dateWrapper/dateWrapperImpl';
import DateWrapper from './dateWrapper/dateWrapper';

const { Storage } = Plugins;

export class DalImpl implements Dal {

    async setValue(key: string, value: Value) {
        await this.setValueByDate(key, value, new Date());
    }

    async setValueByDate(key: string, value: Value, date: Date) {
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
            (x: Item) => {
                let dateWrapper = new DateWrapperImpl(new Date(x.dateTime));
                dateWrapper.setTimestampMs(x.timestampMs);
                return dateWrapper.isBetweenDates(begin, end);
            }
        );
        return items;
    }

    async getLatestItems(key: string, begin: Date, end: Date) {
        let items = await this.getItems(key, begin, end);
        let res: Item[] = this._filterLatestItemsBetweenDates(items, begin, end);
        return res;
    }

    private _filterLatestItemsBetweenDates(items: Item[], begin: Date, end: Date) {
        const beginDW  = new DateWrapperImpl(begin);
        let res: Item[] = [];

        for (let iterDate = beginDW; iterDate.isLesserThanOrEqual(end); iterDate.incrementDays(1)) {
            let filteredItems = items.filter(
                (x: Item) => iterDate.isSameDate(new Date(x.dateTime))
            );
            if (filteredItems.length !== 0) {
                res.push(filteredItems[filteredItems.length - 1]);
            }
        }
        return res;
    }

    async getAllValues(key: string): Promise<Value[]> {
        let items: Item[] = await this.getAllItems(key);
        let values: Value[] = items.map((x: any) => x.value);
        return values;
    }
    async getValues(key: string, begin: Date, end: Date): Promise<Value[]> {
        let items: Item[] = await this.getItems(key, begin, end);
        let values: Value[] = items.map((x: any) => x.value);
        return values;
    }
    async getLatestValues(key: string, begin: Date, end: Date): Promise<Value[]> {
        let items: Item[] = await this.getLatestItems(key, begin, end);
        let values: Value[] = items.map((x: any) => x.value);
        return values;
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
        items = this._filterItemsSameDate(items, date);
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[items.length - 1];
        return value;
    }

    private _filterItemsSameDate(items: Item[], date: Date) {
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
