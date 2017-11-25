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
        assertThat(false);
        return null;
    }


    public void setValue(Type value) {
        assertThat(false);
    }




    // ==============================================================


    static public class UserName extends Param<String> {

        @Override
        public void setValue(String value) {


            ParamRecord record = manager.paramRecordLiveData.getValue();

            // pourquoi ça pourrait être "null"?
            if (record != null) {
                record.userName = value;
                manager.saveParamRecord(record);
            }

        }

        @Override
        public LiveData<String> liveData() {
            return Transformations.map(manager.paramRecordLiveData, record -> record.userName);
        }


    }



    static public class UserHeight extends Param<Float> {

    }



    static public class UserBirthDate extends Param<CalendarDate> {


        @Override
        public LiveData<CalendarDate> liveData() {
            return Transformations.map(manager.paramRecordLiveData, record -> record.userBirthDate);
        }


    }









}
