package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity(primaryKeys = {"date","category"})
public class CommentData {
    @NonNull
    private CalendarDate date;
    private int category;
    private String comment;

    // Getter
    public CalendarDate getDate() {
        return date;
    }

    public int getCategory() {
        return category;
    }

    public String getComment() {
        return comment;
    }

    //Setter
    public void setDate(CalendarDate date) {
        this.date = date;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
