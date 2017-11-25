package com.strudelauxpommes.fitnesshabits;

import android.arch.persistence.room.Room;
import android.content.Context;
import android.support.annotation.MainThread;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.strudelauxpommes.fitnesshabits.data.AppDatabase;

public class MainActivity extends AppCompatActivity {

    public static MainActivity application;
    private AppDatabase database;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @MainThread
    public AppDatabase getDatabase() {
        if (database==null){
            database = Room.databaseBuilder(this, AppDatabase.class,"FitnessHabits-database").fallbackToDestructiveMigration().build(); //TODO: remove fallback destroy
        }
        return database;
    }

    //TODO, repository access HERE
}
