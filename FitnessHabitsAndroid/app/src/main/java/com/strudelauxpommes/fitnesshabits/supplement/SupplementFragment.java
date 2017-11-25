package com.strudelauxpommes.fitnesshabits.supplement;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;

import com.strudelauxpommes.fitnesshabits.R;

import java.util.ArrayList;
import java.util.List;

/**
 * A simple {@link Fragment} subclass.
 */
public class SupplementFragment extends Fragment {

    ImageView checkMorning;
    ImageView checkNoon;
    ImageView checkEvening;
    ImageView checkNight;

    private List<Integer> status = new ArrayList<Integer>(){{
                    add(R.drawable.supp_untouched);
                    add(R.drawable.supp_green_check);
                    add(R.drawable.supp_yellow_check);
                    add(R.drawable.supp_partial);
                    add(R.drawable.supp_unknown);
    }};

    public SupplementFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View RootView = inflater.inflate(R.layout.fragment_supplement, container, false);

        checkMorning = (ImageView) RootView.findViewById(R.id.btnSuppCheckMorning);
        checkNoon = (ImageView) RootView.findViewById(R.id.btnSuppCheckNoon);
        checkEvening = (ImageView) RootView.findViewById(R.id.btnSuppCheckEvening);
        checkNight = (ImageView) RootView.findViewById(R.id.btnSuppCheckNight);
        checkMorning.setTag(R.drawable.supp_untouched);
        checkNoon.setTag(R.drawable.supp_untouched);
        checkEvening.setTag(R.drawable.supp_untouched);
        checkNight.setTag(R.drawable.supp_untouched);

        checkMorning.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setNextDrawable(checkMorning);
            }
        });

        checkNoon.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setNextDrawable(checkNoon);
            }
        });

        checkEvening.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setNextDrawable(checkEvening);
            }
        });

        checkNight.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setNextDrawable(checkNight);
            }
        });
        // Inflate the layout for this fragment
        return RootView;
    }

    private void setNextDrawable(ImageView imageView) {
        int currentDrawableId = status.indexOf((Integer) imageView.getTag());
        int drawableId = status.get((currentDrawableId + 1) % 5);
        imageView.setTag(drawableId);
        imageView.setImageResource(drawableId);
    }

}
