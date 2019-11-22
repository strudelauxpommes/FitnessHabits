import { SleepBuilder } from './sleep_builder'
import moment from 'moment'

test('Create valid sleep', () => {
    let sleepBuilderInstance = (
        new SleepBuilder(moment('2016-11-23T23:00:00-05:00'))
            .buildStart("2315")
            .buildEnd("705")
            .buildNumberOfInteruptions("1")
            .createInstance()
    );

    expect(sleepBuilderInstance.isValid).toBe(true);
    expect(sleepBuilderInstance.errorFields.length).toBe(0);
    expect(sleepBuilderInstance.sleep.getStartTime()).toBe("23:15");
    expect(sleepBuilderInstance.sleep.getEndTime()).toBe("07:05");
    expect(sleepBuilderInstance.sleep.getDurationAsMinutes()).toBe(470);
    expect(sleepBuilderInstance.sleep.getNumberOfInteruptions()).toBe("1");
})

test('Create valid sleep (null interruptions)', () => {
    let sleepBuilderInstance = (
        new SleepBuilder(moment('2016-11-23T23:00:00-05:00'))
            .buildStart("700")
            .buildEnd("800")
            .createInstance()
    );

    expect(sleepBuilderInstance.isValid).toBe(true);
    expect(sleepBuilderInstance.errorFields.length).toBe(0);
    expect(sleepBuilderInstance.sleep.getStartTime()).toBe("07:00");
    expect(sleepBuilderInstance.sleep.getEndTime()).toBe("08:00");
    expect(sleepBuilderInstance.sleep.getDurationAsMinutes()).toBe(60);
    expect(sleepBuilderInstance.sleep.getNumberOfInteruptions()).toBe("0");
})

test('Create invalid sleep (invalid start, end and interruption)', () => {
    let sleepBuilderInstance = (
        new SleepBuilder(moment('2016-11-23T23:00:00-05:00'))
            .buildStart("700f")
            .buildEnd("")
            .buildNumberOfInteruptions(".")
            .createInstance()
    );

    expect(sleepBuilderInstance.isValid).toBe(false);
    expect(sleepBuilderInstance.errorFields.length).toBe(3);
    expect(sleepBuilderInstance.sleep).toBeNull();
})

test('generate a unique id from a moment (SHA1).', () => {
    const builder = new SleepBuilder(moment('2016-11-23T23:00:00-05:00'))
    const id = builder.generateId("2016-11-23T23:00:00-05:00")
    const expected = "0241d8c099edf0ce12738ef6d702cb5396f8b303"

    expect(id).toEqual(expected)
    expect(builder.generateId("2016-11-23T23:00:00-05:00")).toEqual(expected)
})