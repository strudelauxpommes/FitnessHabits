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

    public isSameDate(date2: Date): boolean {
        //return this._date.toLocaleDateString() === date2.toLocaleDateString();
        return this._date.getFullYear() === date2.getFullYear()
            && this._date.getMonth() === date2.getMonth()
            && this._date.getDate() === date2.getDate();
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
        this._date = new Date(dateTime);
    }

}