package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.ForeignKey;
import android.arch.persistence.room.PrimaryKey;
import android.arch.persistence.room.TypeConverter;
import android.arch.persistence.room.TypeConverters;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.converter.CalendarDateConverter;
import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

import java.sql.Date;

import static android.arch.persistence.room.ForeignKey.*;

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
public class PhysicalEntry {
    @NonNull
    private CalendarDate date; //TODO: Implement model
    private int categoryId;
    private int duration;

    // Getters
    public CalendarDate getDate() {
        return date;
    }

    public int getDuration() {
        return duration;
    }

    public int getCategoryId() {
        return categoryId;
    }

    // Setters
    public void setDate(CalendarDate date) {
        this.date = date;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }
}
