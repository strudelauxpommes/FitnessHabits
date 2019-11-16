package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.converter.*;
import com.strudelauxpommes.fitnesshabits.data.dao.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.param.*;
import com.strudelauxpommes.fitnesshabits.data.model.field.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.repository.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;


@Dao
public interface WeightRecordDao {

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertOrReplaceWeightRecord(WeightRecord record);

    @Query("SELECT * FROM WeightRecord WHERE WeightRecord.date = (SELECT currentViewDate FROM ParamRecord LIMIT 1)")
    LiveData<WeightRecord> searchWeightRecord();

}
