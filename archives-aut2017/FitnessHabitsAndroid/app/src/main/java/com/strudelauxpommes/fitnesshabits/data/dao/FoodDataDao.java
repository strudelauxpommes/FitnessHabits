package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.DrinkData;
import com.strudelauxpommes.fitnesshabits.data.model.FoodData;
import com.strudelauxpommes.fitnesshabits.data.model.record.FoodCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.FoodEntry;

import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

@Dao
public interface FoodDataDao {
    @Query("select FoodCategory.id, FoodCategory.categoryName, FoodCategory.pathToImg, FoodCategory.isFavorite, FoodData.repas, FoodData.portions " +
            "from FoodCategory " +
            "left join (select portions, categoryId, repas " +
            "from FoodEntry where FoodEntry.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            ") as FoodData " +
            "on FoodCategory.id = FoodData.categoryId ")
    LiveData<List<FoodData>> getAllFoodToday();

    @Query("select FoodCategory.id, FoodCategory.categoryName, FoodCategory.pathToImg, FoodCategory.isFavorite, FoodData.repas, FoodData.portions " +
            "from FoodCategory " +
            "left join (select FoodEntry.portions, FoodEntry.categoryId, FoodEntry.repas " +
            "from FoodEntry where FoodEntry.date = " +
            "(select currentViewDate from ParamRecord limit 1) and " +
            "FoodEntry.repas = :repas ) "+
            "as FoodData " +
            "on FoodCategory.id = FoodData.categoryId ")
    LiveData<List<FoodData>> getFoodTodayRepas(String repas);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertOrReplaceFoodEntry(FoodEntry entry);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertOrRepaceFoodCategory(FoodCategory category);
}
