import { Sleep } from './sleep';
import { activeDate } from '../../App'
import moment from 'moment';

class SleepBuilder {

    /**
     * [Initialises and declares fields]
     */
    constructor() {

        /* Fields */
        this.startMoment = null;
        this.endMoment = null;
        this.numberOfInteruptions = 0;
        this.comment = "";
        this.sleep = null;

        /* Error handling */
        this.errorFields = [];
        this.errorMessage = "";
        this.isValid = false;

        return this;
    }

    /**
     * [Builds start moment from input]
     * 
     * @param {string} startInput start time input
     * @return this
     */
    buildStart(startInput) {

        if (this.isValidTime(startInput)) {
            this.startMoment = this.convertSleepInputToMoment(String(startInput));
        } else {
            this.errorFields.push("Début");
        }

        return this;
    }

    /**
     * [Builds end moment from input]
     * 
     * @param {string} endInput end time input
     * @return this
     */
    buildEnd(endInput) {

        if (this.isValidTime(endInput)) {
            this.endMoment = this.convertSleepInputToMoment(String(endInput));
        } else {
            this.errorFields.push("Fin");
        }

        return this;
    }

    /**
     * [Builds number of interruptions from input]
     * 
     * @param {string} numberOfInteruptionsInput
     * @return this
     */
    buildNumberOfInteruptions(numberOfInteruptionsInput) {

        if (this.isValidNumber(numberOfInteruptionsInput, true)) {
            this.numberOfInteruptions = numberOfInteruptionsInput
        } else {
            this.errorFields.push("Réveils");
        }

        return this;
    }

    /**
     * [Builds comment from input]
     * 
     * @param {string} comment 
     * @return this
     */
    buildComment(commentInput) {

        if (this.isValidComment(commentInput)) {
            this.comment = commentInput
        }
        
        return this;
    }

    /**
     * [Creates a Sleep instance]
     * 
     * @return object containing a Sleep instance (sleep), the list of 
     * fields with errors (errorFields) and a boolean value (isValid) 
     * to check before using the Sleep object
     */
    createInstance() {
        this.isValid = this.errorFields.length === 0
        && this.startMoment !== null && this.endMoment !== null;

        if (this.isValid) {

            if (this.startMoment.diff(this.endMoment) >= 0) {
                this.startMoment = this.startMoment.subtract(1, 'd');
            }

            this.sleep = new Sleep({
                id: this.startMoment.format("YYYY-MM-DD_hh:mm"),
                start: this.startMoment,
                end: this.endMoment,
                numberOfInteruptions: this.numberOfInteruptions ?
                    String(this.numberOfInteruptions) : "0",
                comment: this.comment,
            });
        }

        this.errorFields.forEach(
            field => this.errorMessage
                += "Le champ <strong>"
                + field
                + "</strong> est invalide.\n"
        )

        return {
            sleep: this.sleep,
            errorMessage: this.errorMessage,
            errorFields: this.errorFields,
            isValid: this.isValid,
        };
    }

    /**
     * [Checks if input is a valid time]
     * 
     * @param {string} input input
     * @return true if valid time (0000), false otherwise.
     */
    isValidTime(input) {
        let isValid = this.isValidNumber(input, false);

        if (isValid) {
            const time = this.getTimeFromSleepString(input);
            isValid = time.minute >= 0 && time.minute <= 59 && time.hour >= 0 && time.hour <= 23
        }

        return isValid;
    }

    /**
     * [Checks if input is valid number]
     * 
     * @param {string} input 
     * @param {boolean} acceptEmpty 
     */
    isValidNumber(input, acceptEmpty) {
        return /^[0-9]{1,4}$/.test(input) || (!input && acceptEmpty);
    }
    
    /**
     * [Checks if command is defined and not null]
     * 
     * @param {string} input
     * @return true is defined and not null, false otherwise
     */
    isValidComment(input) {
        return input !== undefined && input !== null;
    }

    /**
     * [Converts sleep input to moment (assumes input is valid)]
     * 
     * @param {string} input 
     * @return moment with date as activeDate and time as input.
     */
    convertSleepInputToMoment(input) {
        const time = this.getTimeFromSleepString(input);

        const momentObj = {
            year: activeDate.year(),
            month: activeDate.month(),
            day: activeDate.day(),
            hour: time.hour,
            minute: time.minute,
            second: 0,
            milliseconds: 0,
        }

        return moment(momentObj);
    }

    /**
     * [Gets a time object (minute, hour) from sleep time input]
     * 
     * @param {string} input 
     * @return object with time information from string input
     */
    getTimeFromSleepString(input) {
        return {
            minute: Number(input.slice(-2, input.length)),
            hour: Number(input.slice(0, input.length - 2 > 0 ? input.length - 2 : 0)),
        }
    }
}

export { SleepBuilder };