/**
 Data access layer

 The application needs a central data storage to persist value over
 time. The DAL imposes no restriction upon the key format. However,
 using namespace for the keys should help to prevent collision.

 For instance, the profile module with name and age data could look
 like this: profile/name "John Smith", profile/age 42.
 */
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export class Dal {
    /*
      As far as I am concerned, I believe NodeJS only has atomic operations
      because it works on a single thread model. However, Ionic generates
      code to different platforms that may or may not have the same threading
      model. Therefore, I am unsure whether or not the set operation is atomic.
      TODO: "proove" with unit test(s),
            search (Ionic Storage module unit tests or stack overflow)
            peer review.
    */

    async setItem(key: any, value: any) {
        await this.setItemByDate(key, value, new Date());
    }

    async setItemByDate(key: any, value: any, date: Date) {
        let items = await this.getAllItems(key);
        items = this._updateItem(items, date, value);
        await Storage.set({ key, value: JSON.stringify(items) });
    }

    private _updateItem(items: any, date: Date, value: any) {
        const timestampMs = date.getTime();
        items = items.filter((x: any) => {
            let dateToFilter = new Date(x.timestampMs);
            return dateToFilter.toLocaleDateString() !== date.toLocaleDateString();
        });
        items.push({ timestampMs, value });
        return items.sort((x: any,y: any) => x.timestampMs-y.timestampMs);
    }

    async getAllItems(key: any) {
        const { value } = await Storage.get({ key });
        if (value === undefined || value === null) {
            return [];
        } else {
            return JSON.parse(value);
        }
    }

    async getItems(key: any, begin: Date, end: Date) {
        let items = await this.getAllItems(key);
        items = items.filter(
                    (x: any) => {
                        let dateToFilter = new Date(x.timestampMs);
                        return dateToFilter.toLocaleDateString() === begin.toLocaleDateString() 
                            || dateToFilter.toLocaleDateString() === end.toLocaleDateString()
                            || (dateToFilter > begin && dateToFilter < end);
                    }
                );
        return items;
    }

    /**
       Retieve the latest time stamped item under a key
     */
    async getLastItem(key: any) {
        const items = await this.getAllItems(key);
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[items.length - 1];
        return value;
    }

    async getItem(key: any, date: Date) {
        let items = await this.getAllItems(key);
        items = items.filter(
                (x: any) => {
                    let dateToFilter = new Date(x.timestampMs);
                    return dateToFilter.toLocaleDateString() === date.toLocaleDateString();
                }
            );
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[0];
        return value;
    }

    async removeItem(key: any) {
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
