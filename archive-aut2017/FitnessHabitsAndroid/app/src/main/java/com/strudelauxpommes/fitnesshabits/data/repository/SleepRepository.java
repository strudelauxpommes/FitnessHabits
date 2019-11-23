package com.strudelauxpommes.fitnesshabits.data.repository;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.SleepEntryDAO;
import com.strudelauxpommes.fitnesshabits.data.model.DrinkData;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.SleepEntry;
import com.strudelauxpommes.fitnesshabits.data.util.CalendarDate;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public class SleepRepository {
    private LiveData<List<SleepEntry>> listSleepEntry;
    private SleepEntryDAO sleepEntryDAO;

    public SleepRepository(SleepEntryDAO sleepEntryDAO){
        this.sleepEntryDAO = sleepEntryDAO;
    }

    public LiveData<List<SleepEntry>> loadDailyDate() {
        if (listSleepEntry == null) {
            SleepEntry defaultData = new SleepEntry();
            defaultData.setDate(CalendarDate.now());
            defaultData.setStartTime(1);
            defaultData.setEndTime(45);
            List<SleepEntry> list = new ArrayList<>();
            list.add(defaultData);
            listSleepEntry = new DatabaseResource<List<SleepEntry>>(list) {
                @NonNull
                @Override
                protected LiveData<List<SleepEntry>> loadFromDb() {
                    return sleepEntryDAO.getToday();
                }
            }.getAsLiveData();
        }
        return listSleepEntry;
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveDrinkEntry(SleepEntry entry) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                sleepEntryDAO.insertNewEntry(entry);
                return null;
            }
        }.execute();
    }
}
