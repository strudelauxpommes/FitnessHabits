package com.strudelauxpommes.androidcomponents.demo.data_team.converter;

import android.arch.persistence.room.TypeConverter;

import com.strudelauxpommes.androidcomponents.demo.view_team.FormViewModel;

/**
 * An example of a converter for storing complex objects in simple database format.
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */

public class BackgroundColorConverter {
    @TypeConverter
    public FormViewModel.BackgroundColor toEnum(String value) {
        return FormViewModel.BackgroundColor.valueOf(value);
    }

    @TypeConverter
    public String fromEnum(FormViewModel.BackgroundColor value) {
        return value.name();
    }
}
