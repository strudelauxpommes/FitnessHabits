package com.strudelauxpommes.fitnesshabits.data.converter;


import android.arch.persistence.room.TypeConverter;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;
import com.strudelauxpommes.fitnesshabits.data.util.Gender;


public class GenderConverter {

    @TypeConverter
    public Gender fromInt(Integer value) {


        if(value == null) {
            return null;
        }

        return Gender.decodeFromInt(value);
    }

    @TypeConverter
    public Integer toInt(Gender value) {

        if(value == null) {
            return null;
        }

        return value.encodeToInt();
    }


}
