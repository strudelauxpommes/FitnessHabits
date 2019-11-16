package com.strudelauxpommes.fitnesshabits.parameters;

import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.ViewModel;

import com.strudelauxpommes.fitnesshabits.data.repository.ParamRepository;

/**
 * Created by AndreLaptop on 2017-11-23.
 */

public class ParameterViewModel extends ViewModel {

    LiveData<UnitSystem> heightUnitSystem;
    private ParamRepository paramRepo;


}
