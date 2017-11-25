package com.strudelauxpommes.fitnesshabits;

import android.app.DialogFragment;
import android.arch.persistence.room.Room;
import android.content.Context;
import android.support.annotation.MainThread;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.strudelauxpommes.fitnesshabits.data.AppDatabase;

public class MainActivity extends AppCompatActivity {

    public static MainActivity application;
    private AppDatabase database;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }


    public void changeDate(MenuItem mi) {
        if (mi.getItemId() == R.id.datepicker) {

        }
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
