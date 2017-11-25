package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity
public class FoodCategory {
    @PrimaryKey(autoGenerate = true)
    private int id; //TODO: Implement model
    private String categoryName;
    private String pathToImg;
    private boolean isFavorite;

    // Getters
    public int getId() {
        return id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public String getPathToImg() {
        return pathToImg;
    }

    public boolean getIsFavorite() {
        return isFavorite;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public void setPathToImg(String pathToImg) {
        this.pathToImg = pathToImg;
    }
}
