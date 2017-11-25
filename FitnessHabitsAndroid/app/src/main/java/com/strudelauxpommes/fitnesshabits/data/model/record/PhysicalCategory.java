package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity
public class PhysicalCategory {
    @PrimaryKey(autoGenerate = true)
    private int id; //TODO: Implement model
    private String categoryName;;
    private int intensity;
    private boolean isFavorite;

    // Getters
    public int getId() {
        return id;
    }

    public int getIntensity() {
        return intensity;
    }

    public boolean getIsFavorite() {
        return isFavorite;
    }

    public String getCategoryName() {
        return categoryName;
    }

    // Setters

    public void setId(int id) {
        this.id = id;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public void setIntensity(int intensity) {
        this.intensity = intensity;
    }

    public void setIsFavorite(boolean isFavorite) {
        this.isFavorite = isFavorite;
    }
}
