package com.strudelauxpommes.fitnesshabits.data;

import android.arch.persistence.room.Database;
import android.arch.persistence.room.RoomDatabase;

/**
 * Created by thomas on 2017-11-25.
 */

@Database(entities={}, version = 1)
public abstract class AppDatabase extends RoomDatabase{

}
