package com.strudelauxpommes.fitnesshabits.data.model.field;


import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.Transformations;

import com.strudelauxpommes.fitnesshabits.data.model.record.WeightRecord;
import com.strudelauxpommes.fitnesshabits.data.repository.WeightRepository;

public class FieldInstance<Type> {

    WeightRepository weightRepository;
    BaseField<Type> field;

    public FieldInstance(WeightRepository weightRepository, BaseField field) {
        this.weightRepository = weightRepository;
        this.field = field;
    }

    public LiveData<Type> liveData() {
        return Transformations.map(this.weightRepository.weightRecordLiveData, record -> field.getRecordValue(record));
    }

    public void setValue(Type value) {
        WeightRecord record = this.weightRepository.weightRecordLiveData.getValue();
        field.setRecordValue(record, value);
        weightRepository.saveWeightRecord(record);
    }

}
