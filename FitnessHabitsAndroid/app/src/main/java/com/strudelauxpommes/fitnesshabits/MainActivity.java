package com.strudelauxpommes.fitnesshabits;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.strudelauxpommes.fitnesshabits.sleep.SleepFragment;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button sommeilButton = findViewById(R.id.goToSommeilView);

        sommeilButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SleepFragment fragment = new SleepFragment();
                android.support.v4.app.FragmentManager fragmentManager = getSupportFragmentManager();
                fragmentManager.beginTransaction().replace(R.id.frameLayout, fragment).commit();


                startActivity(new Intent(MainActivity.this, SleepFragment.class));
            }
        });
    }
}