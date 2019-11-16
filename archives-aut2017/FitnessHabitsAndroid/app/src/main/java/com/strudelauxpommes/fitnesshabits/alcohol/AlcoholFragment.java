package com.strudelauxpommes.fitnesshabits.alcohol;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.strudelauxpommes.fitnesshabits.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class AlcoholFragment extends Fragment {
    private RecyclerView alcoholRecycler;
    private RecyclerView.LayoutManager layoutManager;
    private RecyclerView.Adapter adapter;
    public AlcoholFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View rootView = inflater.inflate(R.layout.fragment_alcohol, container, false);

        alcoholRecycler = (RecyclerView)  rootView.findViewById(R.id.alcohol_recycler);

        layoutManager = new LinearLayoutManager(getActivity());
        alcoholRecycler.setLayoutManager(layoutManager);

        adapter = new AlcoholSummaryAdapter();
        alcoholRecycler.setAdapter(adapter);

        return rootView;
    }

}
