package com.strudelauxpommes.fitnesshabits;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.data.repository.ParamRepository;
import com.strudelauxpommes.fitnesshabits.data.repository.WeightRepository;

public class TestActivity extends AppCompatActivity {

    Button testButton;
    TextView testInput;
    WeightRepository repo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test);
        experim();


    }

    void experim() {
        testButton = findViewById(R.id.testButtonId);
        testInput = findViewById(R.id.testTextId);

        testButton.setOnClickListener(button -> onButton());




        repo = FitnessHabitsApplication.application.getWeightRepository();

        repo.fatForCurrentDate().liveData().observe(this, name -> testButton.setText("" + name));
        repo.fatForCurrentDate().liveData().observe(this, name -> testInput.setText("" + name));
        testButton.setOnClickListener(button -> repo.fatForCurrentDate().setValue(Float.parseFloat(testInput.getText().toString())));

    }


    void onButton() {

    }



}
