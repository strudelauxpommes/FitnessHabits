package com.strudelauxpommes.fitnesshabits.sleep;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class SleepFragment extends Fragment {


    public SleepFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_sleep, container, false);
        TextView newPage = v.findViewById(R.id.click);

        newPage.setOnClickListener(click -> {
            Intent intent = new Intent(getActivity(), SleepActivity.class);
            startActivity(intent);
        });
        return v;
    }

}
