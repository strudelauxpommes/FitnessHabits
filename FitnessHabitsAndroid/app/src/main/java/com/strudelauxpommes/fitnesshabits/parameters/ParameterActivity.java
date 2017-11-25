package com.strudelauxpommes.fitnesshabits.parameters;

import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;

import com.strudelauxpommes.fitnesshabits.R;

public class ParameterActivity extends AppCompatActivity {

    private TabLayout mTabLayout;
    private ViewPagerAdapter ViewPagerAdapter;
    private ViewPager ViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_parameter);

        setUpViewPager();
    }

    private void setUpViewPager() {
        ViewPagerAdapter = new ViewPagerAdapter(getSupportFragmentManager());
        ViewPager = (ViewPager) findViewById(R.id.pager);
        ViewPager.setAdapter(ViewPagerAdapter);

        mTabLayout = (TabLayout) findViewById(R.id.tabLayout);
        mTabLayout.setupWithViewPager(ViewPager);

    }

}
