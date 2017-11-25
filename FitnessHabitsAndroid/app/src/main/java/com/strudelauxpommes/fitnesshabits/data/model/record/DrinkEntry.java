package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity
public class DrinkEntry {
    @NonNull
    private CalendarDate date; //TODO: Implement model
    private int categoryId;
    private int duration;
}
