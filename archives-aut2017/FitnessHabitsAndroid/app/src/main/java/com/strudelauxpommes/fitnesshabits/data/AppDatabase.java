package com.strudelauxpommes.fitnesshabits.data;

import android.arch.persistence.room.Database;
import android.arch.persistence.room.RoomDatabase;
import android.arch.persistence.room.TypeConverters;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.converter.*;
import com.strudelauxpommes.fitnesshabits.data.dao.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.param.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.repository.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;

/**
 * Created by thomas on 2017-11-25.
 */

@Database(entities={
        FoodEntry.class,
        FoodCategory.class,
        PhysicalEntry.class,
        PhysicalCategory.class,
        ParamRecord.class,
        DrinkCategory.class,
        DrinkEntry.class,
        SleepEntry.class,
        WeightEntry.class,
        SupplementCategory.class,
        SupplementEntry.class
}, version = 2)
@TypeConverters({CalendarDateConverter.class, GenderConverter.class})
public abstract class AppDatabase extends RoomDatabase{
    public abstract PhysicalDataDAO physicalDataDAO();
    public abstract DrinkDataDAO drinkDataDAO();
    public abstract ParamRecordDao paramRecordDao();
    public abstract SleepEntryDAO sleepEntryDAO();
}
