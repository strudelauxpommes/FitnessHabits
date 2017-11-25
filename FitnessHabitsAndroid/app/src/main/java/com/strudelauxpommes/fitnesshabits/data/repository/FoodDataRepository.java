package com.strudelauxpommes.fitnesshabits.data.repository;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.FoodDataDao;
import com.strudelauxpommes.fitnesshabits.data.dao.PhysicalDataDAO;
import com.strudelauxpommes.fitnesshabits.data.model.FoodData;
import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;
import com.strudelauxpommes.fitnesshabits.data.model.record.FoodCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.FoodEntry;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalEntry;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public class FoodDataRepository {
    private LiveData<List<FoodData>> listPhysicalLiveData;
    private FoodDataDao foodDataDao;

    public FoodDataRepository(FoodDataDao foodDataDao) {
        this.foodDataDao = foodDataDao;
    }

    public LiveData<List<FoodData>> loadDailyData() {
        if (listPhysicalLiveData == null) {
            FoodData defaultData = new FoodData(1,"Mock","test",false, "matin", 1.3);
            List<FoodData> list = new ArrayList<>();
            list.add(defaultData);
            listPhysicalLiveData = new DatabaseResource<List<FoodData>>(list){
                @NonNull
                @Override
                protected LiveData<List<FoodData>> loadFromDb() {
                    return foodDataDao.getAllFoodToday();
                }
            }.getAsLiveData();;
        }
        return listPhysicalLiveData;
    }

    public LiveData<List<FoodData>> loadDailyRepasData(String repas) {
        if (listPhysicalLiveData == null) {
            FoodData defaultData = new FoodData(1,"Mock","test",false, "matin", 1.3);
            List<FoodData> list = new ArrayList<>();
            list.add(defaultData);
            listPhysicalLiveData = new DatabaseResource<List<FoodData>>(list){
                @NonNull
                @Override
                protected LiveData<List<FoodData>> loadFromDb() {
                    return foodDataDao.getFoodTodayRepas(repas);
                }
            }.getAsLiveData();;
        }
        return listPhysicalLiveData;
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveFoodCategory(FoodCategory category) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                foodDataDao.insertOrRepaceFoodCategory(category);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveFoodEntry(FoodEntry entry) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                foodDataDao.insertOrReplaceFoodEntry(entry);
                return null;
            }
        }.execute();
    }
}
