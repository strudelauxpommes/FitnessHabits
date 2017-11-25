package com.strudelauxpommes.fitnesshabits;

import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.Transformations;
import android.arch.lifecycle.ViewModel;

import com.strudelauxpommes.fitnesshabits.data.model.record.ParamRecord;
import com.strudelauxpommes.fitnesshabits.data.repository.ParamRepository;
import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

import java.util.Calendar;

/**
 * Created by Marc-Antoine Sauvé on 11/25/17.
 */

class MainActivityViewModel extends ViewModel {

    private ParamRepository paramRepository;

    private LiveData<Calendar> date;

    public void init(ParamRepository paramRepository) {
        this.paramRepository = paramRepository;
        date = Transformations.map(paramRepository.param().currentViewDate().liveData(),
                CalendarDate::getCalendardate);
    }

    public LiveData<Calendar> getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        paramRepository.param().currentViewDate().setValue(new CalendarDate(date));
    }
}
