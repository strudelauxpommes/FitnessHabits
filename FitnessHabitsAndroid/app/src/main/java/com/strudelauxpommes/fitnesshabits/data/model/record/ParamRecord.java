package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;

@Entity
public class ParamRecord {

    @PrimaryKey
    public int id = 0;

    public String userName;

    public Float userHeight;

    public CalendarDate userBirthDate;

    public Gender userGender;

    public CalendarDate currentViewDate;

}
