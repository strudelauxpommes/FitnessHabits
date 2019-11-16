package com.strudelauxpommes.fitnesshabits.data.dao;

import android.arch.lifecycle.LiveData;
import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import com.strudelauxpommes.fitnesshabits.data.model.record.CommentData;

/**
 * Created by thomas on 2017-11-25.
 */

@Dao
public interface CommentDataDao {
    @Query("select * " +
            "from CommentData where CommentData.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            "and CommentData.category = 0")
    LiveData<CommentData> getAlcoolComment();

    @Query("select * " +
            "from CommentData where CommentData.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            "and CommentData.category = 1")
    LiveData<CommentData> getDrinkComment();

    @Query("select * " +
            "from CommentData where CommentData.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            "and CommentData.category = 2")
    LiveData<CommentData> getFoodComment();

    @Query("select * " +
            "from CommentData where CommentData.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            "and CommentData.category = 3")
    LiveData<CommentData> getPhysicalComment();

    @Query("select * " +
            "from CommentData where CommentData.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            "and CommentData.category = 4")
    LiveData<CommentData> getSleepComment();

    @Query("select * " +
            "from CommentData where CommentData.date = " +
            "(select currentViewDate from ParamRecord limit 1)" +
            "and CommentData.category = 5")
    LiveData<CommentData> getWeightComment();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertOrUpdateComment(CommentData comment);
}
