package com.strudelauxpommes.fitnesshabits.data.repository;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.DrinkDataDAO;
import com.strudelauxpommes.fitnesshabits.data.model.DrinkData;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkEntry;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public class DrinkRepository {
    private LiveData<List<DrinkData>> listDrinkData;
    private DrinkDataDAO drinkDataDAO;

    public DrinkRepository(DrinkDataDAO drinkDataDAO) {
        this.drinkDataDAO = drinkDataDAO;
    }

    public LiveData<List<DrinkData>> loadDailyData() {
        if (listDrinkData == null) {
            DrinkData defaultData = new DrinkData(1, "Mock", 5, 2, false);
            List<DrinkData> list = new ArrayList<>();
            list.add(defaultData);
            listDrinkData = new DatabaseResource<List<DrinkData>>(list) {
                @NonNull
                @Override
                protected LiveData<List<DrinkData>> loadFromDb() {
                    return drinkDataDAO.getDrinkToday();
                }
            }.getAsLiveData();
        }
        return listDrinkData;
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveDrinkEntry(DrinkEntry entry) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                drinkDataDAO.insetOrReplaceDrinkEntry(entry);
                return null;
            }
        }.execute();
    }

    /**
     * Create a new alcool category
     *
     * @param category (category.type is not required, it will be set anyways)
     */
    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveDrinkCategory(DrinkCategory category) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                category.setType(1);
                drinkDataDAO.insetOrReplaceDrinkCategory(category);
                return null;
            }
        }.execute();
    }

    /**
     * Add value to a id for a certain date
     */
    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void addAmountForCurrentDay(int categoryId, int amount) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                drinkDataDAO.addToDrink(categoryId, amount);
                return null;
            }
        }.execute();
    }

    /**
     * Add value to a id for a certain date
     */
    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void replaceAmountCurrentDay(int categoryId, int amount) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                drinkDataDAO.replaceDrink(categoryId,amount);
                return null;
            }
        }.execute();
    }

    /**
     * Add value to a id for a certain date
     */
    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void createBreuvage(String name, int amount) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                DrinkCategory cat = new DrinkCategory();
                cat.setType(1);
                cat.setCategoryName(name);
                cat.setQuantity(amount);
                drinkDataDAO.insetOrReplaceDrinkCategory(cat);
                return null;
            }
        }.execute();
    }
}