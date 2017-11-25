package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalEntry;

import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public interface DrinkDataDAO {
    @Query("select DrinkCategory.id, DrinkCategory.categoryName, DrinkCategory.quantity, DrinkCategory.isFavorite, DrinkData.consumed " +
            "from DrinkCategory " +
            "left join (select DrinkEntry.consumed from DrinkEntry where DrinkEntry.date = 'NOW') as DrinkData on DrinkCategory.id = DrinkData.categoryId ")
    LiveData<List<PhysicalData>> getToday();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insetOrReplacePhysicalEntry(PhysicalEntry entry);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insetOrReplacePhysicalCategory(PhysicalCategory category);
}
