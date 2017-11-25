package com.strudelauxpommes.fitnesshabits.physicalactivity;


import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.strudelauxpommes.fitnesshabits.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class PhysicalActivityFragment extends Fragment {

    TextView tvActHeader;
    TextView edtOtherFooter;
    TextView tv1;
    EditText edtDur1;
    EditText edtDur2;
    EditText edtDur3;

    public PhysicalActivityFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View fragmentView = inflater.inflate(R.layout.fragment_physical_activity, container, false);

        tv1 = fragmentView.findViewById(R.id.tv1);

        tvActHeader = fragmentView.findViewById(R.id.tvActHeader);
        edtOtherFooter = fragmentView.findViewById(R.id.edtOtherFooter);

        edtDur1 = fragmentView.findViewById(R.id.edtDur1);
        edtDur2 = fragmentView.findViewById(R.id.edtDur2);
        edtDur3 = fragmentView.findViewById(R.id.edtDur3);

        setHeaderListeners();
        setEditTextListeners();

        return fragmentView;
    }

    public void openNewActivity(View view) {
        Intent in = new Intent(getActivity(), SubPhysicalActivity.class);
        startActivity(in);
    }

    private void setHeaderListeners() {
        tvActHeader.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNewActivity(view);
            }
        });

        edtOtherFooter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNewActivity(view);
            }
        });
    }

    private void setEditTextListeners() {
        edtDur1.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent event) {
                String currentValue = (view.getText().toString());
                //((EditText) view).getEditableText().clear();
                //edtDur1.setText("");
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    //Toast.makeText(getActivity(), "Clicked the DONE button", Toast.LENGTH_SHORT).show();

                    int input = Integer.parseInt(view.getText().toString());
                    Toast.makeText(getActivity(), "input= " + input, Toast.LENGTH_SHORT).show();

                    // request to add duration to the current duration of the activity

                    // request to get duration to the current duration of the activity

                    // set text value to duration

                    //edtDur2.setText(String.valueOf(input));
                    hideKeyboard(edtDur1);
                    edtDur1.clearFocus();
                    return true;
                }
                Toast.makeText(getActivity(), "Didn't work", Toast.LENGTH_SHORT).show();
                edtDur1.setText(currentValue);
                return false;
            }
        });
        edtDur2.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    int input = Integer.parseInt(view.getText().toString());
                    Toast.makeText(getActivity(), "input= " + input, Toast.LENGTH_SHORT).show();
                    hideKeyboard(edtDur2);
                    edtDur2.clearFocus();
                    return true;
                }
                return false;
            }
        });
        edtDur3.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    int input = Integer.parseInt(view.getText().toString());
                    Toast.makeText(getActivity(), "input= " + input, Toast.LENGTH_SHORT).show();
                    hideKeyboard(edtDur3);
                    edtDur3.clearFocus();
                    return true;
                }
                return false;
            }
        });
    }

    public void hideKeyboard(View view) {
        InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
    }

}
