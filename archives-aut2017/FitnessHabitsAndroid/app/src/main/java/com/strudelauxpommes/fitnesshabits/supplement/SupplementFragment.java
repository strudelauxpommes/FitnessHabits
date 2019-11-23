package com.strudelauxpommes.fitnesshabits.supplement;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.strudelauxpommes.fitnesshabits.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class SupplementFragment extends Fragment {


    public SupplementFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_supplement, container, false);
    }

}
