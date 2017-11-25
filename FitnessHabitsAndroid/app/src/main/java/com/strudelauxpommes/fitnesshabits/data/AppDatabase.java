package com.strudelauxpommes.fitnesshabits.data;

import android.arch.persistence.room.Database;
import android.arch.persistence.room.RoomDatabase;

import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.FoodCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.FoodEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.SleepCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.SleepEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.SupplementCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.SupplementEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.WeightEntry;

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
        SleepCategory.class,
        SleepEntry.class,
        WeightEntry.class,
        SupplementCategory.class,
        SupplementEntry.class
}, version = 1)
public abstract class AppDatabase extends RoomDatabase{

}
