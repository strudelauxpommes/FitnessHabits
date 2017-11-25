package com.strudelauxpommes.fitnesshabits.data.model.param;



public class ParamManager {

    public ParamManager() {

    };

    public Param.Name getName() {
        Param.Name param = new Param.Name();
        param.init(this);
        return param;
    }

    public Param.Height getHeight() {
        Param.Height param = new Param.Height();
        param.init(this);
        return param;
    }

    public Param.BirthDate getBirthDate() {
        Param.BirthDate param = new Param.BirthDate();
        param.init(this);
        return param;
    }


}
