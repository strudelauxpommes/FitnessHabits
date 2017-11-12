package com.strudelauxpommes.androidcomponents.demo;

import android.app.Application;
import android.arch.persistence.room.Room;
import android.support.annotation.MainThread;

import com.strudelauxpommes.androidcomponents.demo.data_team.AppDatabase;
import com.strudelauxpommes.androidcomponents.demo.data_team.UIDataRepository;

/**
 * Application class used as a singleton to create the Data layer classes (Repository and Database)
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */
public class DemoApplication extends Application {

    public static DemoApplication application;

    private AppDatabase database;
    private UIDataRepository uiDataRepository;

    @MainThread
    public AppDatabase getDatabase() {
        if (database == null) {
            database = Room.databaseBuilder(this, AppDatabase.class, "demo-database").build();
        }
        return database;
    }

    @MainThread
    public UIDataRepository getUIDataRepository() {
        if (uiDataRepository == null) {
            uiDataRepository = new UIDataRepository(getDatabase().userDao());
        }
        return uiDataRepository;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        DemoApplication.application = this;
    }

}
