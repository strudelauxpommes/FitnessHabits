package com.strudelauxpommes.fitnesshabits.data.model.param;


import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.Transformations;

import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;
import com.strudelauxpommes.fitnesshabits.data.util.BaseObject;
import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

public abstract class Param<Type> extends BaseObject {

    ParamManager manager;

    public void init(ParamManager manager) {
        this.manager = manager;
    }


    public LiveData<Type> liveData() {
        return Transformations.map(manager.paramRecordLiveData, record -> getValueOnRecord(record));
    }

    public abstract void setValueOnRecord(ParamRecord record, Type type);
    public abstract Type getValueOnRecord(ParamRecord record);


    public void setValue(Type value) {

        ParamRecord record = manager.paramRecordLiveData.getValue();

        // pourquoi ça pourrait être "null"?
        if (record != null) {
            setValueOnRecord(record, value);
            manager.saveParamRecord(record);
        }

    }

    // ==============================================================

    static public class UserName extends Param<String> {

        @Override
        public void setValueOnRecord(ParamRecord record, String name) {
            record.userName = name;
        }

        @Override
        public String getValueOnRecord(ParamRecord record) {
            return record.userName;
        }

    }



    static public class UserHeight extends Param<Float> {

        @Override
        public void setValueOnRecord(ParamRecord record, Float name) {
            record.userHeight = name;
        }

        @Override
        public Float getValueOnRecord(ParamRecord record) {
            return record.userHeight;
        }

    }



    static public class UserBirthDate extends Param<CalendarDate> {


        @Override
        public void setValueOnRecord(ParamRecord record, CalendarDate name) {
            record.userBirthDate = name;
        }

        @Override
        public CalendarDate getValueOnRecord(ParamRecord record) {
            return record.userBirthDate;
        }


    }








    static public class CurrentViewDate extends Param<CalendarDate> {


        @Override
        public void setValueOnRecord(ParamRecord record, CalendarDate name) {
            record.currentViewDate = name;
        }

        @Override
        public CalendarDate getValueOnRecord(ParamRecord record) {
            return record.currentViewDate;
        }


    }












}
