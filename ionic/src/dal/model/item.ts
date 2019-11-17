import { Value } from './value';

export default interface Item {
    timestampMs: number;
    dateTime: number;
    value: Value;
}