package com.strudelauxpommes.fitnesshabits.parameters;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import com.strudelauxpommes.fitnesshabits.R;

/**
 * Created by AndreLaptop on 2017-11-25.
 */

public class ViewPagerAdapter extends FragmentStatePagerAdapter {

    private static int TAB_COUNT = 2;

    public ViewPagerAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int position) {

        switch (position) {
            case 0:
                return ProfileFragment.newInstance();
            case 1:
                return ParametersFragment.newInstance();
        }
        return null;
    }

    @Override
    public int getCount() {
        return TAB_COUNT;
    }

    @Override
    public CharSequence getPageTitle(int position) {
        switch (position) {
            case 0:
                return ProfileFragment.TITLE;

            case 1:
                return ParametersFragment.TITLE;

        }
        return super.getPageTitle(position);
    }
}
