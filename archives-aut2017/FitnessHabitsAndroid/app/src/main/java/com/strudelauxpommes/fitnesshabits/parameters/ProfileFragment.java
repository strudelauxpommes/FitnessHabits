package com.strudelauxpommes.fitnesshabits.parameters;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import com.strudelauxpommes.fitnesshabits.FitnessHabitsApplication;
import com.strudelauxpommes.fitnesshabits.R;
import com.strudelauxpommes.fitnesshabits.data.repository.ParamRepository;

public class ProfileFragment extends Fragment {

    public static final String TITLE = "Profile";

    public static ProfileFragment newInstance() {

        return new ProfileFragment();
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_profile, container, false);

        TextView txt = (TextView) v.findViewById(R.id.txt_username);
        Button btn = (Button) v.findViewById(R.id.button_test);


        ParamRepository repo = FitnessHabitsApplication.application.getParamRepository();

        repo.param().userName().liveData().observe(this, name -> txt.setText(name));

        btn.setOnClickListener(button -> repo.param().userName().setValue(txt.getText().toString()));


        return v;
    }


}