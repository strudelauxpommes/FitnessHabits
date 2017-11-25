package com.strudelauxpommes.fitnesshabits.data.converter;

import android.arch.persistence.room.TypeConverter;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

/**
 * Created by thomas on 2017-11-25.
 */

public class CalendarDateConverter {

    @TypeConverter
    public CalendarDate fromString(String value) {
        return CalendarDate.decodeFromString(value);
    }

    @TypeConverter
    public String toString(CalendarDate date) {
        return date.encodeToString();
    }

}
