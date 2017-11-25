package com.strudelauxpommes.fitnesshabits.food;


import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class FoodFragment extends Fragment {


    public FoodFragment() {
        // Required empty public constructor
    }

    /*public void openDetail(View v)
    {
        Intent intent = new Intent(getActivity(), FoodDetailedActivity.class);
        startActivity(intent);
    }*/

    Button header;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View rootView = inflater.inflate(R.layout.fragment_food, container, false);

        header = (Button)rootView.findViewById(R.id.btnHeader);

        header.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FoodFragment.this.getActivity(), FoodDetailedActivity.class);
                startActivity(intent);
            }

        });

        return rootView;
    }



}
