import DateWrapper from './dateWrapper';

export class DateWrapperImpl implements DateWrapper {

    private _timestampMs: number = Date.now();    
    private _date: Date;

    constructor(date: Date) { this._date = new Date(date);}

    public isBetweenDates(begin: Date, end: Date): boolean {
        return this.isSameDate(begin) 
            || this.isSameDate(end)
            || (this._date > begin && this._date < end);

    }

    public isSameDate(date: Date): boolean {
        return this._date.getFullYear() === date.getFullYear()
            && this._date.getMonth() === date.getMonth()
            && this._date.getDate() === date.getDate();
    }

    public isGreaterThan(date: Date): boolean {
        return this._date > date;
    }

    public isGreaterThanOrEqual(date: Date): boolean {
        return this._date >= date;
    }

    public isLesserThan(date: Date): boolean {
        return this._date < date;
    }

    public isLesserThanOrEqual(date: Date): boolean {
        return this._date <= date;
    }

    public incrementDays(numberOfDays: number):void {
        this._date.setDate(this._date.getDate() + numberOfDays);
    }

    public decrementDays(numberOfDays: number):void {
        this._date.setDate(this._date.getDate() - numberOfDays);
    }

    public getTimestampMs(): number {
        return this._timestampMs;
    }
    public setTimestampMs(value: number) {
        this._timestampMs = value;
    }

    public getDateTime(): number {
        return this._date.getTime();
    }
    public setDateTime(dateTime: number) {
        this._date.setTime(dateTime);
    }

}