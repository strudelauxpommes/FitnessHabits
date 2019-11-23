import { SleepBuilder } from './sleep_builder'

test('Create valid sleep', () => {
    let sleepBuilderInstance = (
        new SleepBuilder()
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
        new SleepBuilder()
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
        new SleepBuilder()
            .buildStart("700f")
            .buildEnd("")
            .buildNumberOfInteruptions(".")
            .createInstance()
    );

    expect(sleepBuilderInstance.isValid).toBe(false);
    expect(sleepBuilderInstance.errorFields.length).toBe(3);
    expect(sleepBuilderInstance.sleep).toBeNull();
})
