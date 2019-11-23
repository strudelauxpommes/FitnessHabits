package com.strudelauxpommes.fitnesshabits.data.repository;

import com.strudelauxpommes.fitnesshabits.data.*;
import com.strudelauxpommes.fitnesshabits.data.converter.*;
import com.strudelauxpommes.fitnesshabits.data.dao.*;
import com.strudelauxpommes.fitnesshabits.data.model.*;
import com.strudelauxpommes.fitnesshabits.data.model.param.*;
import com.strudelauxpommes.fitnesshabits.data.model.record.*;
import com.strudelauxpommes.fitnesshabits.data.repository.*;
import com.strudelauxpommes.fitnesshabits.data.util.*;


public class ParamRepository {

    ParamRecordDao paramRecordDao;
    ParamManager paramManager;

    public ParamRepository(ParamRecordDao paramRecordDao) {
        this.paramRecordDao = paramRecordDao;
        this.paramManager = new ParamManager(paramRecordDao);
    }

    public ParamManager param() {
        return this.paramManager;
    }

}
