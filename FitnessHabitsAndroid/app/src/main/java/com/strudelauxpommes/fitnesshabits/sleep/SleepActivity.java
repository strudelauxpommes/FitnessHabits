package com.strudelauxpommes.fitnesshabits.sleep;

import android.arch.lifecycle.ViewModelProviders;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.strudelauxpommes.fitnesshabits.R;

public class SleepActivity extends AppCompatActivity {
    private SleepViewModel sleepViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sommeil);
        this.sleepViewModel = ViewModelProviders.of(this).get(SleepViewModel.class);
    }
}
