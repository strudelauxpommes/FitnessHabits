package com.strudelauxpommes.androidcomponents.demo.data_team;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.androidcomponents.demo.data_team.model.UIData;

/**
 * Handle the Database Read and Write.
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */

@Dao
public interface UIDataDao {
    @Query("SELECT * FROM UIData LIMIT 1")
    LiveData<UIData> getUIData();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertOrReplaceUIData(UIData uiData);
}
