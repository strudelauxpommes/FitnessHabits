package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity
public class DrinkCategory {
    @PrimaryKey(autoGenerate = true)
    private int id;
    private int type;
    private String categoryName;
    private int quantity;
    private boolean isFavorite;

    // Getters
    public int getId() {
        return id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public int getQuantity() {
        return quantity;
    }

    public int getType() {
        return type;
    }

    public boolean getIsFavorite() {
        return isFavorite;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setType(int type) {
        this.type = type;
    }
}
