/**
 Data access layer

 The application needs a central data storage to persist value over
 time. The DAL imposes no restriction upon the key format. However,
 using namespace for the keys should help to prevent collision.

 For instance, the profile module with name and age data could look
 like this: profile/name "John Smith", profile/age 42.
 */
import Item from './model/item';

export default interface Dal {

    /**
     * Set an item (key, {timestamp, date, value}) for a given (key, value)
     * in the Storage with the actual date.
     * If the key already exists with the same date (year, month, day)
     * the value will be "updated" (i.e. the item will be added with a new 
     * timestamp, instead of updating the old value).
     * @param key
     * @param value
     */
    setItem(key: any, value: any): Promise<void>;

    /**
     * Set an item (key, {timestamp, date, value}) for a given (key, date, value)
     * in the Storage with the given date.
     * If the key already exists with the same date (year, month, day)
     * the value will be "updated" (i.e. the item will be added with a new 
     * timestamp, instead of updating the old value).
     * @param key
     * @param value
     * @param date
     */
    setItemByDate(key: any, value: any, date: Date): Promise<void>;

    /**
     * Get all items with their timestamp related to the given key
     * @param key
     */
    getAllItems(key: any): Promise<Array<Item>>;

    /**
     * Get all items with their timestamp related to the given key and between
     * the begin date to the end date inclusively.
     * @param key
     * @param begin
     * @param end
     */
    getItems(key: any, begin: Date, end: Date): Promise<Array<Item>>;

    /**
     * Get all latest items (by the mean of their timestamp) related to the given 
     * key and between the begin date to the end date inclusively.
     * An item is the "latest" if its timestamp is the most recent for other items
     * with the same (key, date, value) 
     * @param key
     * @param begin
     * @param end
     */
    getLatestItems(key: any, begin: Date, end: Date): Promise<Array<Item>>;

    /**
     * Retrieve the latest time stamped item under a key regardless its date.
     * @param key
     */
    getLastItem(key: any): Promise<Item>;

    /**
     * Retrieve the latest time stamped item under a key for a given date
     * @param key
     * @param date
     */
    getItem(key: any, date: Date): Promise<Item>;

    /**
     * Remove all items for the given key
     * @param keyq
     */
    removeItem(key: any): Promise<void>;

    /**
     * Return all keys.
     */
    keys(): Promise<Array<string>>;

    /**
     * Clear all items.
     */
    clear(): Promise<void>;
}