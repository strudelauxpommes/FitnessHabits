package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;
import com.strudelauxpommes.fitnesshabits.data.model.record.SleepEntry;

import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

@Dao
public interface SleepEntryDAO {
    @Query("select * " +
            "from SleepEntry " +
            "where SleepEntry.date = " +
            "(select currentViewDate from ParamRecord limit 1) ")
    LiveData<List<SleepEntry>> getToday();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertNewEntry(SleepEntry entry);
}
