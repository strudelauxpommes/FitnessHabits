package com.strudelauxpommes.fitnesshabits.data.model.record;

import android.arch.persistence.room.Entity;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.converter.*;
import com.strudelauxpommes.fitnesshabits.data.dao.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.param.*;
import com.strudelauxpommes.fitnesshabits.data.model.field.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.repository.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;

@Entity(primaryKeys = {"date"})
public class WeightRecord extends BaseRecord {

    @NonNull
    public CalendarDate date;

    public Float weight;
    public Float fat;

}
