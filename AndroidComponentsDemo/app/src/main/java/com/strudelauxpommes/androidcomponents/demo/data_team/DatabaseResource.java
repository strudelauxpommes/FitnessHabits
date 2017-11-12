package com.strudelauxpommes.androidcomponents.demo.data_team;

import android.arch.lifecycle.LiveData;
import android.arch.lifecycle.MediatorLiveData;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

/**
 * Represent a single resource that comes from a database where a default value can be provided. It
 * has the responsibility to provide the most fresh data between the default value and the value
 * loaded from the database. The class is abstract to allow the implementation to specify how the
 * data is loaded from the database. This class is an example of a helper class that can be made to
 * simplify data handling. It is not necessarily going to be useful in every scenario.
 *
 * Created by Marc-Antoine Sauvé on 11/11/17.
 */

public abstract class DatabaseResource<Type> {
    private final MediatorLiveData<Type> result = new MediatorLiveData<>();

    @MainThread
    public DatabaseResource(Type defaultData) {
        // Set the default value
        result.setValue(defaultData);
        // Load from database and replace the default value
        LiveData<Type> dbSource = loadFromDb();
        result.addSource(dbSource, data -> {
            if (data != null) {
                result.setValue(data);
            }
        });
    }

    public final LiveData<Type> getAsLiveData() {
        return result;
    }

    // Called to get the cached data from the database
    @NonNull
    @MainThread
    protected abstract LiveData<Type> loadFromDb();
}
