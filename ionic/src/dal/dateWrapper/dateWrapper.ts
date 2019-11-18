export default interface DateWrapper {
    getTimestampMs(): number;
    setTimestampMs(value: number): void;
    getDateTime(): number;
    setDateTime(dateTime: number): void;
    isBetweenDates(begin: Date, end: Date): boolean;
    isSameDate(date2: Date): boolean;
}