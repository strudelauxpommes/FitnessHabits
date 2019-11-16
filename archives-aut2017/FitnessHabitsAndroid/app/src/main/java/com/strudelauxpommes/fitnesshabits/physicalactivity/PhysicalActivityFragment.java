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
    TextView tvOtherFooter;
    EditText edtDur1;
    EditText edtDur2;
    EditText edtDur3;
    EditText edtDurTotal;
    EditText edtInten1;
    EditText edtInten2;
    EditText edtInten3;
    EditText edtIntenTot;

    public PhysicalActivityFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View fragmentView = inflater.inflate(R.layout.fragment_physical_activity, container, false);

        tvActHeader = fragmentView.findViewById(R.id.tvActHeader);
        tvOtherFooter = fragmentView.findViewById(R.id.tvOtherFooter);

        edtDur1 = fragmentView.findViewById(R.id.edtDur1);
        edtDur2 = fragmentView.findViewById(R.id.edtDur2);
        edtDur3 = fragmentView.findViewById(R.id.edtDur3);
        edtDurTotal = fragmentView.findViewById(R.id.edtDurTot);

        edtInten1 = fragmentView.findViewById(R.id.edtInten1);
        edtInten2 = fragmentView.findViewById(R.id.edtInten2);
        edtInten3 = fragmentView.findViewById(R.id.edtInten3);
        edtIntenTot = fragmentView.findViewById(R.id.edtIntenTot);

        setMarginsListeners();
        setEditTextListeners();

        return fragmentView;
    }

    public void openNewActivity(View view) {
        Intent in = new Intent(getActivity(), PhysicalActivityDetail.class);
        startActivity(in);
    }

    private void setMarginsListeners() {
        tvActHeader.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNewActivity(view);
            }
        });

        tvOtherFooter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNewActivity(view);
            }
        });
    }

    private void setEditTextTotals() {
        // get liveData
        //edtDurTotal.setText();
        // get param
        //edtIntenTot.setText();
    }

    private void setEditTextListeners() {
        edtDur1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtDur1.getText().clear();
            }
        });
        edtDur1.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent event) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    validateInput(view);
                    hideKeyboard(edtDur1);
                    edtDur1.clearFocus();
                    return true;
                }
                return false;
            }
        });
        edtDur2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtDur2.getText().clear();
            }
        });
        edtDur2.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    validateInput(view);
                    hideKeyboard(edtDur2);
                    edtDur2.clearFocus();
                    return true;
                }
                return false;
            }
        });
        edtDur3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtDur3.getText().clear();
            }
        });
        edtDur3.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    validateInput(view);
                    hideKeyboard(edtDur3);
                    edtDur3.clearFocus();
                    return true;
                }
                return false;
            }
        });

        edtInten1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtInten1.getText().clear();
            }
        });
        edtInten1.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    validateNumberInput0to10(view);
                    hideKeyboard(edtInten1);
                    edtInten1.clearFocus();
                    return true;
                }
                return false;
            }
        });

        edtInten2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                edtInten2.getText().clear();
            }
        });
        edtInten2.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    validateNumberInput0to10(view);
                    hideKeyboard(edtInten2);
                    edtInten2.clearFocus();
                    return true;
                }
                return false;
            }
        });
        edtInten3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtInten3.getText().clear();
            }
        });
        edtInten3.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView view, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_DONE) {
                    validateNumberInput0to10(view);
                    hideKeyboard(edtInten3);
                    edtInten3.clearFocus();
                    return true;
                }
                return false;
            }
        });
    }

    private void validateInput(TextView view) {
        try {
            int input = Integer.parseInt(view.getText().toString());
            Toast.makeText(getActivity(), "Input = " + input, Toast.LENGTH_SHORT).show();
        } catch (Exception e){
            Toast.makeText(getActivity(), "Please enter a number", Toast.LENGTH_SHORT).show();
        }
    }

    private void validateNumberInput0to10(TextView view) {
        int input = Integer.parseInt(view.getText().toString());
        if (input > 10) {
            Toast.makeText(getActivity(), "Please enter a number between 0 and 10", Toast.LENGTH_SHORT).show();
        }
    }

    public void hideKeyboard(View view) {
        InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
    }

}
