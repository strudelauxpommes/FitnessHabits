package com.strudelauxpommes.androidcomponents.demo.data_team.model;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

import com.strudelauxpommes.androidcomponents.demo.view_team.FormViewModel;

/**
 * An entity to be saved in the database.
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */

@Entity
public class UIData {
    @PrimaryKey(autoGenerate = true)
    private int id;
    private FormViewModel.BackgroundColor backgroundColor;
    private int fontSize;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public FormViewModel.BackgroundColor getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(FormViewModel.BackgroundColor backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public int getFontSize() {
        return fontSize;
    }

    public void setFontSize(int fontSize) {
        this.fontSize = fontSize;
    }
}
