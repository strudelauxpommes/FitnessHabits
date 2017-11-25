package com.strudelauxpommes.fitnesshabits.data.repository;

import android.arch.lifecycle.LiveData;

import com.strudelauxpommes.fitnesshabits.data.dao.PhysicalDataDAO;
import com.strudelauxpommes.fitnesshabits.data.model.PhysicalData;

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
        }
        return null;
    }
}
