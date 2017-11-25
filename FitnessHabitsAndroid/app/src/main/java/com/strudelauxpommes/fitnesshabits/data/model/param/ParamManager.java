package com.strudelauxpommes.fitnesshabits.data.model.param;


import android.arch.lifecycle.LiveData;

import com.strudelauxpommes.fitnesshabits.data.dao.ParamRecordDao;
import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;

public class ParamManager {

    public LiveData<ParamRecord> paramRecordLiveData;
    ParamRecordDao paramRecordDao;

    public ParamManager(ParamRecordDao paramRecordDao) {
        this.paramRecordDao = paramRecordDao;
        this.paramRecordLiveData = paramRecordDao.loadRecordLiveData();
    };

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


    public void saveParamRecord(ParamRecord record) {
        paramRecordDao.saveParamRecord(record);
    }
}
