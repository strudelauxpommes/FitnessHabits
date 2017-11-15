package com.strudelauxpommes.androidcomponents.demo.view_team;

import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.Transformations;
import android.arch.lifecycle.ViewModel;
import android.support.annotation.ColorRes;

import com.strudelauxpommes.androidcomponents.demo.data_team.UIDataRepository;
import com.strudelauxpommes.androidcomponents.demo.data_team.model.UIData;

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

    // Data layer
    private UIDataRepository repository;
    private LiveData<UIData> uiDataLiveData;

    // ViewModel live data
    private LiveData<BackgroundColor> backgroundColor;
    private LiveData<Integer> fontSize;

    public static final int minFontSize = 12;
    public static final int maxFontSize = 36;

    public void init(UIDataRepository repository) {
        this.repository = repository;
        // Get the data from the repository
        this.uiDataLiveData = repository.loadUIData();
        // Transform the Data layer LiveData to the ModelView live data
        backgroundColor = Transformations.map(uiDataLiveData, UIData::getBackgroundColor);
        fontSize = Transformations.map(uiDataLiveData, UIData::getFontSize);
    }

    // Only ViewModel LiveData should be exposed. The Data layer should not be exposed by the ViewModel.

    public LiveData<BackgroundColor> getBackgroundColor() {
        return backgroundColor;
    }

    public LiveData<Integer> getFontSize() {
        return fontSize;
    }

    public void setBackgroundColor(BackgroundColor backgroundColor) {
        UIData currentUIData = uiDataLiveData.getValue();
        if (currentUIData != null) {
            currentUIData.setBackgroundColor(backgroundColor);
            repository.saveUIData(currentUIData);
        }
    }

    public void setFontSize(Integer fontSize) {
        UIData currentUIData = uiDataLiveData.getValue();
        if (currentUIData != null) {
            currentUIData.setFontSize(fontSize);
            repository.saveUIData(currentUIData);
        }
    }
}
