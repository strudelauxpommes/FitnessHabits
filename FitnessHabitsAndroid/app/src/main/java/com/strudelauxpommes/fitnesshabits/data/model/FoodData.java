package com.strudelauxpommes.fitnesshabits.data.model;

/**
 * Created by thomas on 2017-11-25.
 */

public class FoodData {
    public int id;
    public String nomCategorie;
    public String pathToImg;
    public boolean isFavorite;
    public String repas;
    public double portions;

    public FoodData(int id, String nomCategorie, String pathToImg, boolean isFavorite, String repas, double portions) {
        this.id = id;
        this.nomCategorie = nomCategorie;
        this.pathToImg = pathToImg;
        this.isFavorite = isFavorite;
        this.repas = repas;
        this.portions = portions;
    }
}
