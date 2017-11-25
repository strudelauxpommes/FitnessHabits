package com.strudelauxpommes.fitnesshabits.data.model;

/**
 * Created by thomas on 2017-11-25.
 */

public class PhysicalData {
    public int id;
    public String categoryName;
    public int duration;
    public int intensity;
    public boolean isFavorite;

    public PhysicalData() {

    }

    public PhysicalData(int id, String categoryName, int duration, int intensity, boolean isFavorite){
        this.id = id;;
        this.categoryName = categoryName;
        this.duration = duration;
        this.intensity = intensity;
        this.isFavorite = isFavorite;
    }
}
