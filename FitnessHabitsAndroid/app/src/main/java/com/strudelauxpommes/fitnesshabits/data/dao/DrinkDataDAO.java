package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.DrinkData;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;

import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

@Dao
public interface DrinkDataDAO {
    @Query("select DrinkCategory.id, DrinkCategory.categoryName, DrinkCategory.quantity, DrinkCategory.isFavorite, DrinkData.consumed " +
            "from DrinkCategory " +
            "left join (select DrinkEntry.consumed, DrinkEntry.categoryId " +
            "from DrinkEntry where DrinkEntry.date = 'NOW') as DrinkData " +
            "on DrinkCategory.id = DrinkData.categoryId " +
            "where DrinkCategory.type = 0")
    LiveData<List<DrinkData>> getAlcoolToday();

    @Query("select DrinkCategory.id, DrinkCategory.categoryName, DrinkCategory.quantity, DrinkCategory.isFavorite, DrinkData.consumed " +
            "from DrinkCategory " +
            "left join (select DrinkEntry.consumed, DrinkEntry.categoryId " +
            "from DrinkEntry where DrinkEntry.date = 'NOW') as DrinkData " +
            "on DrinkCategory.id = DrinkData.categoryId " +
            "where DrinkCategory.type = 1")
    LiveData<List<DrinkData>> getDrinkToday();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insetOrReplaceDrinkCategory(DrinkCategory category);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insetOrReplaceDrinkEntry(DrinkEntry entry);
}
