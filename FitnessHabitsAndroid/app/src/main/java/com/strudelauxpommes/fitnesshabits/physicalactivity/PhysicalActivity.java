package com.strudelauxpommes.fitnesshabits.physicalactivity;

/**
 * Created by bernard on 25/11/17.
 */

public class PhysicalActivity {

    private String nameActivity;
    private String duration;
    private String intensive;
    private boolean fav;

    public PhysicalActivity() {
    }

    public PhysicalActivity(String nameActivity, String duration, String intensive, Boolean fav) {
        nameActivity = nameActivity;
        duration = duration;
        intensive = intensive;
        fav = fav;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getIntensive() {
        return intensive;
    }

    public void setIntensive(String intensive) {
        this.intensive = intensive;
    }

    public boolean isFav() {
        return fav;
    }

    public void setFav(boolean fav) {
        this.fav = fav;
    }


    public String getNameActivity() {
        return nameActivity;
    }

    public void setNameActivity(String nameActivity) {
        this.nameActivity = nameActivity;
    }


}
