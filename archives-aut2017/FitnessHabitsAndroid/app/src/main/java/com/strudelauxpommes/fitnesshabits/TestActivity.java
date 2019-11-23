package com.strudelauxpommes.fitnesshabits;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.data.repository.ParamRepository;

public class TestActivity extends AppCompatActivity {

    Button testButton;
    TextView testInput;
    ParamRepository repo;

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



        repo = FitnessHabitsApplication.application.getParamRepository();


        repo.param().userName().liveData().observe(this, name -> testButton.setText(name));
        repo.param().userName().liveData().observe(this, name -> testInput.setText(name));
        testButton.setOnClickListener(button -> repo.param().userName().setValue(testInput.getText().toString()));

        
    }


    void onButton() {

    }


}
