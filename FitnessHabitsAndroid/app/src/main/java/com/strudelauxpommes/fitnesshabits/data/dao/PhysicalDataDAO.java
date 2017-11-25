package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;

import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

@Dao
public interface PhysicalDataDAO {
    @Query("select * " +
            "from PhysicalCategory " +
            "left join (select * from PhysicalEntry where PhysicalEntry.date = 'NOW') as CategoryData on PhysicalCategory.id = CategoryData.categoryId ")
    LiveData<List<PhysicalData>> getToday();
}
