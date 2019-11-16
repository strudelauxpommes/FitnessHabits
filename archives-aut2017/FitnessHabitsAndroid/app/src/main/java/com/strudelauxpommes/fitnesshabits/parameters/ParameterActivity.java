package com.strudelauxpommes.fitnesshabits.parameters;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.DatePicker;
import android.widget.Spinner;
import android.widget.TextView;
import com.strudelauxpommes.fitnesshabits.R;
import java.util.Calendar;

public class ParameterActivity extends AppCompatActivity
        implements DatePickerDialog.OnDateSetListener {

    private TabLayout mTabLayout;
    private ViewPagerAdapter ViewPagerAdapter;
    private ViewPager ViewPager;
    private ParameterViewModel viewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_parameter);
        setUpViewPager();


        Spinner heightSpinner = findViewById(R.id.heightSpinner);


    }

    private void setUpViewPager() {
        ViewPagerAdapter = new ViewPagerAdapter(getSupportFragmentManager());
        ViewPager = (ViewPager) findViewById(R.id.pager);
        ViewPager.setAdapter(ViewPagerAdapter);
        mTabLayout = (TabLayout) findViewById(R.id.tabLayout);
        mTabLayout.setupWithViewPager(ViewPager);

    }

    public void showDatePickerDialog(View v) {
        final Calendar c = Calendar.getInstance();
        int year = c.get(Calendar.YEAR);
        int month = c.get(Calendar.MONTH);
        int day = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog newFragment = new DatePickerDialog(this, this, year, month, day);
        newFragment.show();
    }

    @Override
    public void onDateSet(DatePicker datePicker, int year, int month, int day) {
        // Do something with the date chosen by the user
        TextView txt = (TextView)findViewById(R.id.txt_birthday);
        txt.setText(year+"-"+month+"-"+day);

    }
}
