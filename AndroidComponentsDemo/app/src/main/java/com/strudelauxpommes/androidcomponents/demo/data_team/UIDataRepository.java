package com.strudelauxpommes.androidcomponents.demo.data_team;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.androidcomponents.demo.data_team.model.UIData;
import com.strudelauxpommes.androidcomponents.demo.view_team.FormViewModel;

/**
 * A Repository is used to combine one or several data source. The Repository is agnostic of it's
 * data source implementation. That means that the caller class does not know where the data is
 * coming from. In this case the only data source is the database, but we could have a network data
 * source, a disk cache, or any other kind of data source. This class have the goal of combining the
 * data sources and provide the most fresh data available. It should also know how to save the data
 * and propagate it to all the data sources.
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */
public class UIDataRepository {
    private UIDataDao uiDataDao;

    public UIDataRepository(UIDataDao uiDataDao) {
        this.uiDataDao = uiDataDao;
    }

    public LiveData<UIData> loadUIData() {
        UIData defaultUIData = new UIData();
        defaultUIData.setBackgroundColor(FormViewModel.BackgroundColor.blue);
        defaultUIData.setFontSize(24);
        return new DatabaseResource<UIData>(defaultUIData) {
            @NonNull
            @Override
            protected LiveData<UIData> loadFromDb() {
                return uiDataDao.getUIData();
            }
        }.getAsLiveData();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveUIData(UIData uiData) {
        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                uiDataDao.insertOrReplaceUIData(uiData);
                return null;
            }
        }.execute();
    }
}
