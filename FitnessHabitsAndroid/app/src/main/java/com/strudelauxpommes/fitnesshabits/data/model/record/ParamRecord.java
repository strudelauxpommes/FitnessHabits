package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;

@Entity
public class ParamRecord {

    @PrimaryKey(autoGenerate = true)
    private int id;

    String name;

    Float height;

    CalendarDate birthDate;

    Gender gender;

    CalendarDate currentViewDate;
    
    private int id; //TODO: Implement model

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
