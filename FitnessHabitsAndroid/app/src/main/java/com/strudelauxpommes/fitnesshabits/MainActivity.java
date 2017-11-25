package com.strudelauxpommes.fitnesshabits;

import android.app.DialogFragment;
import android.arch.persistence.room.Room;
import android.content.Context;
import android.content.Intent;
import android.support.annotation.MainThread;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.strudelauxpommes.fitnesshabits.data.AppDatabase;
import com.strudelauxpommes.fitnesshabits.data.repository.AlcoolRepository;
import com.strudelauxpommes.fitnesshabits.data.repository.PhysicalRepository;

public class MainActivity extends AppCompatActivity {

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

    @Override

    public boolean onOptionsItemSelected(MenuItem item) {

        if (item.getItemId() == R.id.objectif) {
            // activité temporaire, pour expérimenter. à enlever seulement à la fin de la journée
            Intent intent = new Intent(this, TestActivity.class);
            this.startActivity(intent);
        }

        return false;

    }
}
