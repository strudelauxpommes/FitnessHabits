package com.strudelauxpommes.fitnesshabits.data.repository;

import com.strudelauxpommes.fitnesshabits.FitnessHabitsApplication;
import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.converter.*;
import com.strudelauxpommes.fitnesshabits.data.dao.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.param.*;
import com.strudelauxpommes.fitnesshabits.data.model.field.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.repository.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;
import android.util.Log;


public class WeightRepository {

    private final ParamRepository paramRepo;
    public LiveData<WeightRecord> weightRecordLiveData;
    public WeightRecordDao weightRecordDao;


    public WeightRepository(WeightRecordDao weightRecordDao) {
        this.weightRecordDao = weightRecordDao;
        this.paramRepo = FitnessHabitsApplication.application.getParamRepository();
        this.weightRecordLiveData = loadWeightRecordLiveData();


    }

    public FieldInstance<Float> weightForCurrentDate() {
        return new FieldInstance<Float>(this, new WeightFieldWeight());
    }

    public FieldInstance<Float> fatForCurrentDate() {
        return new FieldInstance<Float>(this, new WeightFieldFat());
    }


    private LiveData<WeightRecord> loadWeightRecordLiveData() {

        WeightRecord defaultRecord = new WeightRecord();

        return new DatabaseResource<WeightRecord>(defaultRecord) {
            @NonNull
            @Override
            protected LiveData<WeightRecord> loadFromDb() {
                return weightRecordDao.searchWeightRecord();
            }
        }.getAsLiveData();

    }


    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveWeightRecord(WeightRecord record) {

        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {

                if(record.date == null) {
                    record.date = paramRepo._getCurrentViewDate();
                }


                weightRecordDao.insertOrReplaceWeightRecord(record);
                return null;
            }
        }.execute();


    }


}


