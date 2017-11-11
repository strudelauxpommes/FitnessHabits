package com.strudelauxpommes.androidcomponents.demo.view_team;

import android.arch.lifecycle.ViewModelProviders;
import android.os.Bundle;
import android.support.annotation.ColorInt;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.TypedValue;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.NumberPicker;

import com.strudelauxpommes.androidcomponents.demo.view_team.FormViewModel;

import com.strudelauxpommes.androidcomponents.demo.R;

public class MainActivity extends AppCompatActivity {

    private FormViewModel viewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        // Step 1: Get our views references
        Button blueButton = findViewById(R.id.blueButton);
        Button orangeButton = findViewById(R.id.orangeButton);
        Button purpleButton = findViewById(R.id.purpleButton);
        View container = findViewById(R.id.container);
        NumberPicker buttonTextSizePicker = findViewById(R.id.buttonTextSizePicker);

        // Step 2: Initialize the views if needed. This initialization should be data independant.
        // Initialize spinner
        buttonTextSizePicker.setMinValue(FormViewModel.minFontSize);
        buttonTextSizePicker.setMaxValue(FormViewModel.maxFontSize);

        // Step 3: Get and init the ViewModel for this View
        // Initialize ViewModel
        viewModel = ViewModelProviders.of(this).get(FormViewModel.class);
        viewModel.init();

        // Step 4: Bind the ViewModel values to the UI
        // Register to the changes of the models to update the UI automatically when needed
        // When the backgroundColor change, we should change the background color of our container
        viewModel.getBackgroundColor().observe(this, backgroundColor -> {
            if (backgroundColor != null) {
                // Get the color value from the color resource
                @ColorInt int color = ContextCompat.getColor(this, backgroundColor.getColor());
                container.setBackgroundColor(color);
            }
        });

        // When the fontSize change, we should change the font size of our 3 buttons and make sure
        // that our NumberPicker show the right value.
        viewModel.getFontSize().observe(this, fontSize -> {
            if (fontSize != null) {
                blueButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, fontSize);
                orangeButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, fontSize);
                purpleButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, fontSize);
                buttonTextSizePicker.setValue(fontSize);
            }
        });

        // Step 5: Bind the UI events to the ViewModel
        // Initialize the actions of the UI. These actions should only modify the viewModel.
        // The viewModel contains the logic for the update and the view will be refreshed automatically.
        blueButton.setOnClickListener(button ->
                viewModel.setBackgroundColor(FormViewModel.BackgroundColor.blue));
        orangeButton.setOnClickListener(button ->
                viewModel.setBackgroundColor(FormViewModel.BackgroundColor.orange));
        purpleButton.setOnClickListener(button ->
                viewModel.setBackgroundColor(FormViewModel.BackgroundColor.purple));
        buttonTextSizePicker.setOnValueChangedListener((numberPicker, oldFontSize, newFontSize) ->
                viewModel.setFontSize(newFontSize));
    }

}
