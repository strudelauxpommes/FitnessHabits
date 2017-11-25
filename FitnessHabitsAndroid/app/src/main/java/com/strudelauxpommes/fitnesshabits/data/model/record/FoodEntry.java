package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.ForeignKey;
import android.arch.persistence.room.PrimaryKey;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

import static android.arch.persistence.room.ForeignKey.NO_ACTION;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity(primaryKeys = {"date","repas"},
        foreignKeys = @ForeignKey(entity = FoodCategory.class,
                parentColumns = "id",
                childColumns = "categoryId",
                onDelete = NO_ACTION,
                onUpdate = NO_ACTION))
public class FoodEntry {
    @NonNull
    private CalendarDate date;
    @NonNull
    private String repas;
    private int categoryId;
    private double portions;

    // Getters
    public CalendarDate getDate() {
        return date;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public double getPortions() {
        return portions;
    }

    public String getRepas() {
        return repas;
    }

    // Setters
    public void setDate(CalendarDate date) {
        this.date = date;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public void setPortions(double portions) {
        this.portions = portions;
    }

    public void setRepas(String repas) {
        this.repas = repas;
    }
}
