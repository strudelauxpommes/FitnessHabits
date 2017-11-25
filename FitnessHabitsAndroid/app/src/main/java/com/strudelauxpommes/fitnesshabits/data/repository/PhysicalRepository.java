package com.strudelauxpommes.fitnesshabits.data.repository;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.PhysicalDataDAO;
import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalCategory;
import com.strudelauxpommes.fitnesshabits.data.model.record.PhysicalEntry;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public class PhysicalRepository {
    private LiveData<List<PhysicalData>> listPhysicalLiveData;
    private PhysicalDataDAO physicalDataDAO;

    public PhysicalRepository(PhysicalDataDAO physicalDataDAO) {
        this.physicalDataDAO = physicalDataDAO;
    }

    public LiveData<List<PhysicalData>> loadDailyData() {
        if (listPhysicalLiveData == null) {
            PhysicalData defaultData = new PhysicalData(1,"Mock",5,2, false);
            List<PhysicalData> list = new ArrayList<>();
            list.add(defaultData);
            listPhysicalLiveData = new DatabaseResource<List<PhysicalData>>(list){
                @NonNull
                @Override
                protected LiveData<List<PhysicalData>> loadFromDb() {
                    return physicalDataDAO.getToday();
                }
            }.getAsLiveData();;
        }
        return listPhysicalLiveData;
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void savePhysicalEntry(PhysicalEntry entry) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                physicalDataDAO.insetOrReplacePhysicalEntry(entry);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void savePhysicalCategory(PhysicalCategory category) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                physicalDataDAO.insetOrReplacePhysicalCategory(category);
                return null;
            }
        }.execute();
    }
}
