package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;
import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalEntry;

import java.util.List;


@Dao
public interface ParamRecordDao {

    @Query("SELECT * FROM ParamRecord LIMIT 1")
    LiveData<ParamRecord> loadRecordLiveData();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void saveParamRecord(ParamRecord record);

}
