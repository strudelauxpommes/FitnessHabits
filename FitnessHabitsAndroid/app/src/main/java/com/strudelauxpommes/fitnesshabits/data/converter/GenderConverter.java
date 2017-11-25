package com.strudelauxpommes.fitnesshabits.data.converter;


import android.arch.persistence.room.TypeConverter;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;
import com.strudelauxpommes.fitnesshabits.data.util.Gender;


public class GenderConverter {

    @TypeConverter
    public Gender fromInt(int value) {
        return Gender.decodeFromInt(value);
    }

    @TypeConverter
    public int toInt(Gender value) {
        return value.encodeToInt();
    }


}
