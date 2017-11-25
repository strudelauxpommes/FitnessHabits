package com.strudelauxpommes.fitnesshabits;

import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.MutableLiveData;
import android.arch.lifecycle.ViewModel;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Created by Marc-Antoine Sauvé on 11/25/17.
 */

class MainActivityViewModel extends ViewModel {

    MutableLiveData<Calendar> date;

    public MainActivityViewModel() {
        date = new MutableLiveData<>();
        date.postValue(Calendar.getInstance());
    }

    public LiveData<Calendar> getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        this.date.postValue(date);
    }
}
