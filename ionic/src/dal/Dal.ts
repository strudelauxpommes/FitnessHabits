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
        const timestampMs = Date.now();
        const lastValue = await this.getItems(key);
        lastValue.push({ timestampMs, value });
        await Storage.set({ key, value: JSON.stringify(lastValue) });
    }

    async getItems(key: any) {
        const { value } = await Storage.get({ key });
        if (value === undefined || value === null) {
            return [];
        } else {
            return JSON.parse(value);
        }
    }

    /**
       Retieve the latest time stamped item under a key
     */
    async getItem(key: any) {
        const items = await this.getItems(key);
        if (items.length === 0) {
            return undefined;
        }
        const { value } = items[items.length - 1];
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
