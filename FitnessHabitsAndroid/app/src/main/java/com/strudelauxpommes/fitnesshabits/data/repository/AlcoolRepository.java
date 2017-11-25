package com.strudelauxpommes.fitnesshabits.data.repository;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.DrinkDataDAO;
import com.strudelauxpommes.fitnesshabits.data.dao.PhysicalDataDAO;
import com.strudelauxpommes.fitnesshabits.data.model.DrinkData;
import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalEntry;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public class AlcoolRepository {
    private LiveData<List<DrinkData>> listDrinkDataAlcool;
    private DrinkDataDAO drinkDataDAO;

    public AlcoolRepository(DrinkDataDAO drinkDataDAO) {
        this.drinkDataDAO = drinkDataDAO;
    }

    public LiveData<List<DrinkData>> loadDailyData() {
        if (listDrinkDataAlcool == null) {
            DrinkData defaultData = new DrinkData(1,"Mock",5,2, false);
            List<DrinkData> list = new ArrayList<>();
            list.add(defaultData);
            listDrinkDataAlcool = new DatabaseResource<List<DrinkData>>(list){
                @NonNull
                @Override
                protected LiveData<List<DrinkData>> loadFromDb() {
                    return drinkDataDAO.getAlcoolToday();
                }
            }.getAsLiveData();;
        }
        return listDrinkDataAlcool;
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveAlcoolDrinkEntry(DrinkEntry entry) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                drinkDataDAO.insetOrReplaceDrinkEntry(entry);
                return null;
            }
        }.execute();
    }

    /**
     * Create a new alcool category
     * @param category (category.type is not required, it will be set anyways)
     */
    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveAlcoolDrinkCategory(DrinkCategory category) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                category.setType(0);
                drinkDataDAO.insetOrReplaceDrinkCategory(category);
                return null;
            }
        }.execute();
    }
}
