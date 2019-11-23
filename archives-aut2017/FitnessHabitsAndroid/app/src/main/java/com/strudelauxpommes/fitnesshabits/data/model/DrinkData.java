package com.strudelauxpommes.fitnesshabits.data.model;

/**
 * Created by thomas on 2017-11-25.
 */

public class DrinkData {
    public int id;
    public String categoryName;
    public int quantity;
    public int consumed;
    public boolean isFavorite;

    public DrinkData() {

    }

    public DrinkData(int id, String categoryName, int quantity, int consumed, boolean isFavorite) {
        this.id = id;
        this.categoryName = categoryName;
        this.quantity = quantity;
        this.consumed = consumed;
        this.isFavorite = isFavorite;
    }
}


