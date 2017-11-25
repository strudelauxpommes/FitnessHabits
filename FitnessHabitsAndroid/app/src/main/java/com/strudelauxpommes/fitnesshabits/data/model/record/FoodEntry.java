package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

/**
 * Created by thomas on 2017-11-25.
 */

@Entity
public class FoodEntry {
    @PrimaryKey(autoGenerate = true)
    private int id; //TODO: Implement model

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
