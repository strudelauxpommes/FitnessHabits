package com.strudelauxpommes.fitnesshabits.data.model.param;


import android.arch.lifecycle.LiveData;

import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;
import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

public abstract class Param<Type> {

    ParamManager manager;

    public void init(ParamManager manager) {
        this.manager = manager;
    }

    public LiveData<Type> liveData() {
        return null;
    }


    public void setValue(Type value) {

    }

    abstract Type getValue(ParamRecord record);


    // ==============================================================


    static class Name extends Param<String> {

        @Override
        public String getValue(ParamRecord record) {
            return null;
        }

        @Override
        public LiveData<String> liveData() {
            return null;
        }

    }



    static class Height extends Param<Float> {

        @Override
        public Float getValue(ParamRecord record) {
            return null;
        }

        @Override
        public LiveData<Float> liveData() {
            return null;
        }
    }



    static class BirthDate extends Param<CalendarDate> {

        @Override
        public CalendarDate getValue(ParamRecord record) {
            return null;
        }

        @Override
        public LiveData<CalendarDate> liveData() {
            return null;
        }
    }










}
