package com.strudelauxpommes.androidcomponents.demo.view_team;

import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.MutableLiveData;
import android.arch.lifecycle.ViewModel;
import android.support.annotation.ColorRes;

/**
 * A ViewModel to hold the information and actions required by a view. It's the abstraction that
 * connect the Data layer to the View layer. Neither the View nor the Data layers should be aware of
 * each others thanks to this class.
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */
public class FormViewModel extends ViewModel {
    public enum BackgroundColor {
        blue(android.R.color.holo_blue_bright),
        orange(android.R.color.holo_orange_light),
        purple(android.R.color.holo_purple);

        private final @ColorRes int color;

        BackgroundColor(@ColorRes int color) {
            this.color = color;
        }

        public @ColorRes int getColor() {
            return color;
        }
    }

    private MutableLiveData<BackgroundColor> backgroundColor = new MutableLiveData<>();
    private MutableLiveData<Integer> fontSize = new MutableLiveData<>();

    public static final int minFontSize = 12;
    public static final int maxFontSize = 36;

    public void init() {
        init(BackgroundColor.blue, 24);
    }

    public void init(BackgroundColor backgroundColor, Integer fontSize) {
        setBackgroundColor(backgroundColor);
        setFontSize(fontSize);
    }

    public LiveData<BackgroundColor> getBackgroundColor() {
        return backgroundColor;
    }

    public LiveData<Integer> getFontSize() {
        return fontSize;
    }

    public void setBackgroundColor(BackgroundColor backgroundColor) {
        this.backgroundColor.setValue(backgroundColor);
    }

    public void setFontSize(Integer fontSize) {
        this.fontSize.setValue(fontSize);
    }
}
