import { DateWrapperImpl } from './dateWrapperImpl';
import DateWrapper from './dateWrapper';

describe('DateWrapper', function() {
    let dateWrapper: DateWrapper ;

    describe('constructor', function() {
        it('should have a timestamp lesser or equal to Date.now()', function() {
            dateWrapper = new DateWrapperImpl(new Date());
            const actual = dateWrapper.getTimestampMs();
            expect(actual).toBeLessThanOrEqual(Date.now());
        });

        it('should have the same date (year, month and day)', function() {
            const actual = new DateWrapperImpl(new Date("11/2/2019, 3:33:50 PM"));
            expect(actual.isSameDate(new Date("11/2/2019, 5:33:50 AM"))).toBe(true);
        });

        it('should return if it is at the begin of the dates range', function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            const actual = new DateWrapperImpl(begin);
            expect(actual.isBetweenDates(begin, end)).toBe(true);
        });

        it('should return if it is between two date', function() {
            const begin = new Date("2019-01-01");
            const middle = new Date("2019-01-02");
            const end = new Date("2019-01-03");
            const actual = new DateWrapperImpl(middle);
            expect(actual.isBetweenDates(begin, end)).toBe(true);
        });

        it('should return if it is at the end of the dates range', function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            const actual = new DateWrapperImpl(end);
            expect(actual.isBetweenDates(begin, end)).toBe(true);
        });

        it('should return false if it is out ouf range', function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            const afterEnd = new Date("2019-01-04");
            const beforeBegin = new Date("2018-12-31");
            let actual = new DateWrapperImpl(afterEnd);
            expect(actual.isBetweenDates(begin, end)).toBe(false);
            actual = new DateWrapperImpl(beforeBegin);
            expect(actual.isBetweenDates(begin, end)).toBe(false);
        });


        //AJOUT JM

        // isGreaterThan
        it('should return true if the end date is greater than the beginning one', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-02-02")
            let actual = new DateWrapperImpl(end);
            expect(actual.isGreaterThan(begin)).toBe(true);
        });

        it('should return false if the end date is smaller than the beginning one', function(){
            const begin = new Date("2019-02-02");
            const end = new Date("2019-01-01")
            let actual = new DateWrapperImpl(end);
            expect(actual.isGreaterThan(begin)).toBe(false);
        });

        it('should return false if the end date is the same as the beginning one', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-01")
            let actual = new DateWrapperImpl(end);
            expect(actual.isGreaterThan(begin)).toBe(false);
        });


        // isGreaterThanOrEqual
        it('should return true if the end date is greater than the beginning one', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-02-02")
            let actual = new DateWrapperImpl(end);
            expect(actual.isGreaterThanOrEqual(begin)).toBe(true);
        });

        it('should return false if the end date is smaller than the beginning one', function(){
            const begin = new Date("2019-02-02");
            const end = new Date("2019-01-01")
            let actual = new DateWrapperImpl(end);
            expect(actual.isGreaterThanOrEqual(begin)).toBe(false);
        });

        it('should return true if the end date is the same as the beginning one', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-01")
            let actual = new DateWrapperImpl(end);
            expect(actual.isGreaterThanOrEqual(begin)).toBe(true);
        });


        // isLesserThan
        it('should return true if the beginning date is smaller than the ending one', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-02-02")
            let actual = new DateWrapperImpl(begin);
            expect(actual.isLesserThan(end)).toBe(true);
        });

        it('should return false if the beginning date is greater than the ending one', function(){
            const begin = new Date("2019-02-02");
            const end = new Date("2019-02-01")
            let actual = new DateWrapperImpl(begin);
            expect(actual.isLesserThan(end)).toBe(false);
        });

        it('should return false if the beginning date is the same as the ending one', function(){
            const begin = new Date("2019-02-02");
            const end = new Date("2019-02-02")
            let actual = new DateWrapperImpl(begin);
            expect(actual.isLesserThan(end)).toBe(false);
        });


        //isLesserThanOrEqual
        it('should return true if the beginning date is smaller than the ending one', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-02-02")
            let actual = new DateWrapperImpl(begin);
            expect(actual.isLesserThanOrEqual(end)).toBe(true);
        });

        it('should return false if the beginning date is greater than the ending one', function(){
            const begin = new Date("2019-02-02");
            const end = new Date("2019-02-01")
            let actual = new DateWrapperImpl(begin);
            expect(actual.isLesserThanOrEqual(end)).toBe(false);
        });

        it('should return true if the beginning date is the same as the ending one', function(){
            const begin = new Date("2019-02-02");
            const end = new Date("2019-02-02")
            let actual = new DateWrapperImpl(begin);
            expect(actual.isLesserThanOrEqual(end)).toBe(true);
        });


        // incrementDays
        it('should return true if the first date plus a number of days is equal to the second date', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-31");
            const numberOfDays = 30;
            let actual = new DateWrapperImpl(begin);
            actual.incrementDays(numberOfDays);
            expect(actual.isSameDate(end)).toBe(true);
        });

        it('should return false if the first date plus a number of days is not equal to the second date', function(){
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-31");
            const numberOfDays = 20;
            let actual = new DateWrapperImpl(begin);
            actual.incrementDays(numberOfDays);
            expect(actual.isSameDate(end)).toBe(false);
        });

        // decrementDays
        it('should return true if the first date minus a number of days is equal to the second date', function(){
            const begin = new Date("2019-01-31");
            const end = new Date("2019-01-01");
            const numberOfDays = 30;
            let actual = new DateWrapperImpl(begin);
            actual.decrementDays(numberOfDays);
            expect(actual.isSameDate(end)).toBe(true);
        });

        it('should return false if the first date minus a number of days is not equal to the second date', function(){
            const begin = new Date("2019-01-31");
            const end = new Date("2019-01-01");
            const numberOfDays = 20;
            let actual = new DateWrapperImpl(begin);
            actual.decrementDays(numberOfDays);
            expect(actual.isSameDate(end)).toBe(false);
        });

    });

});