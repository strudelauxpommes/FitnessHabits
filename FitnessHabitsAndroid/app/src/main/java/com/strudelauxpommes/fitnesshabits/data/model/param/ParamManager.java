package com.strudelauxpommes.fitnesshabits.data.model.param;


import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.ParamRecordDao;
import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;

public class ParamManager {

    public LiveData<ParamRecord> paramRecordLiveData;
    ParamRecordDao paramRecordDao;

    public ParamManager(ParamRecordDao paramRecordDao) {
        this.paramRecordDao = paramRecordDao;
        this.paramRecordLiveData = loadParamRecordLiveData();
    };


    public LiveData<ParamRecord> loadParamRecordLiveData() {

        ParamRecord defaultRecord = new ParamRecord();

        return new DatabaseResource<ParamRecord>(defaultRecord) {
            @NonNull
            @Override
            protected LiveData<ParamRecord> loadFromDb() {
                return paramRecordDao.loadRecordLiveData();
            }
        }.getAsLiveData();

    }


    public Param.UserName userName() {
        Param.UserName param = new Param.UserName();
        param.init(this);
        return param;
    }

    public Param.UserHeight userHeight() {
        Param.UserHeight param = new Param.UserHeight();
        param.init(this);
        return param;
    }

    public Param.UserBirthDate userBirthDate() {
        Param.UserBirthDate param = new Param.UserBirthDate();
        param.init(this);
        return param;
    }


    public Param.CurrentViewDate currentViewDate() {
        Param.CurrentViewDate param = new Param.CurrentViewDate();
        param.init(this);
        return param;
    }


    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveParamRecord(ParamRecord record) {

        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                paramRecordDao.saveParamRecord(record);
                return null;
            }
        }.execute();


    }



}
