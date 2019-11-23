package com.strudelauxpommes.fitnesshabits.data.converter;

import android.arch.persistence.room.TypeConverter;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;


public class CalendarDateConverter {

    @TypeConverter
    public CalendarDate fromString(String value) {

        if(value == null) {
            return null;
        }

        return CalendarDate.decodeFromString(value);
    }

    @TypeConverter
    public String toString(CalendarDate date) {
        if(date == null) {
            return null;
        }
        return date.encodeToString();
    }

}
