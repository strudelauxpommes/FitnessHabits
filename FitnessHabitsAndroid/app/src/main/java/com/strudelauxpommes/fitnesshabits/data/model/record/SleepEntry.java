package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity
public class SleepEntry {
    @PrimaryKey(autoGenerate = true)
    private int id;
    @NonNull
    private CalendarDate date;
    private int startTime;
    private int endTime;
    private int wakeNb;

    // Getters
    public int getId() {
        return id;
    }

    @NonNull
    public CalendarDate getDate() {
        return date;
    }

    public int getEndTime() {
        return endTime;
    }

    public int getStartTime() {
        return startTime;
    }

    public int getWakeNb() {
        return wakeNb;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setDate(@NonNull CalendarDate date) {
        this.date = date;
    }

    public void setEndTime(int endTime) {
        this.endTime = endTime;
    }

    public void setStartTime(int startTime) {
        this.startTime = startTime;
    }

    public void setWakeNb(int wakeNb) {
        this.wakeNb = wakeNb;
    }
}
