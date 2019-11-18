export default interface DateWrapper {
    isBetweenDates(begin: Date, end: Date): boolean;
    isSameDate(date2: Date): boolean;
    isGreaterThan(date: Date): boolean;
    isGreaterThanOrEqual(date: Date): boolean;
    isLesserThan(date: Date): boolean;
    isLesserThanOrEqual(date: Date): boolean;
    incrementDays(numberOfDays: number):void;
    decrementDays(numberOfDays: number):void;
    getTimestampMs(): number;
    setTimestampMs(value: number): void;
    getDateTime(): number;
    setDateTime(dateTime: number): void;
}