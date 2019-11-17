export default interface DateWrapper {
    // timestampMs: number;
    // date: Date;
    getTimestampMs(): number;
    setTimestampMs(value: number): void;
    getDateTime(): number;
    setDateTime(dateTime: number): void;
    isBetweenDates(begin: Date, end: Date): boolean;
    isSameDate(date2: Date): boolean;
}