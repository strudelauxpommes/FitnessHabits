package com.strudelauxpommes.fitnesshabits.data.model.field;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.converter.*;
import com.strudelauxpommes.fitnesshabits.data.dao.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.param.*;
import com.strudelauxpommes.fitnesshabits.data.model.field.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.repository.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;


public class WeightFieldFat extends BaseField<Float> {

    public void setRecordValue(BaseRecord record, Float value) {
        ((WeightRecord)record).fat = value;
    }

    public Float getRecordValue(BaseRecord record) {
        return ((WeightRecord)record).fat;
    }

}

