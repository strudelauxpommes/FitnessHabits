package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.ForeignKey;
import android.arch.persistence.room.TypeConverters;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.converter.CalendarDateConverter;
import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

import static android.arch.persistence.room.ForeignKey.NO_ACTION;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity(primaryKeys = {"date", "categoryId"},
        foreignKeys = @ForeignKey(entity = PhysicalCategory.class,
                parentColumns = "id",
                childColumns = "categoryId",
                onDelete = NO_ACTION,
                onUpdate = NO_ACTION))
@TypeConverters(CalendarDateConverter.class)
public class DrinkEntry {
    @NonNull
    private CalendarDate date;
    private int categoryId;
    private int consumed;

    //Getters
    public int getCategoryId() {
        return categoryId;
    }

    public int getConsumed() {
        return consumed;
    }

    @NonNull
    public CalendarDate getDate() {
        return date;
    }

    //Setter
    public void setDate(@NonNull CalendarDate date) {
        this.date = date;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public void setConsumed(int consumed) {
        this.consumed = consumed;
    }
}
