package com.strudelauxpommes.fitnesshabits.food;


import android.content.Intent;
import android.content.res.TypedArray;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.R;

import java.util.List;

/**
 * A simple {@link Fragment} subclass.
 */
public class FoodFragment extends Fragment {


    public FoodFragment() {
        // Required empty public constructor
    }

    int repasCourant = 0;
    String listeRepas[] = {"Petit-Déj.","Coll. AM","Diner", "Coll. PM", "Souper", "Coll. soir"};
    TextView nomRepas;

    Button header;
    Button repasRight;
    Button repasLeft;
    ImageView commentaire;

    ImageView btnCat1;
    ImageView btnCat2;
    ImageView btnCat3;
    ImageView btnCat4;
    ImageView btnCat5;
    TextView txtCat1;
    TextView txtCat2;
    TextView txtCat3;
    TextView txtCat4;
    TextView txtCat5;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View rootView = inflater.inflate(R.layout.fragment_food, container, false);

        nomRepas = (TextView)rootView.findViewById(R.id.txtNomRepas);
        nomRepas.setText(listeRepas[0]);

        header = (Button)rootView.findViewById(R.id.btnHeader);
        repasRight = (Button)rootView.findViewById(R.id.btnRight);
        repasLeft = (Button)rootView.findViewById(R.id.btnLeft);
        commentaire = (ImageView)rootView.findViewById(R.id.btnComment);

        header.setOnClickListener(openDetailedActivity);
        commentaire.setOnClickListener(openDetailedActivity);

        btnCat1 = (ImageView)rootView.findViewById(R.id.btnCat1);
        txtCat1 = (TextView)rootView.findViewById(R.id.txtPortions1);

        btnCat2 = (ImageView)rootView.findViewById(R.id.btnCat2);
        txtCat2 = (TextView)rootView.findViewById(R.id.txtPortions2);

        btnCat3 = (ImageView)rootView.findViewById(R.id.btnCat3);
        txtCat3 = (TextView)rootView.findViewById(R.id.txtPortions3);

        btnCat4 = (ImageView)rootView.findViewById(R.id.btnCat4);
        txtCat4 = (TextView)rootView.findViewById(R.id.txtPortions4);

        btnCat5 = (ImageView)rootView.findViewById(R.id.btnCat5);
        txtCat5 = (TextView)rootView.findViewById(R.id.txtPortions5);

        repasRight.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(repasCourant == listeRepas.length - 1) {
                    repasCourant = 0;
                } else {
                    repasCourant++;
                }
                nomRepas.setText(listeRepas[repasCourant]);

            }

        });

        repasLeft.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(repasCourant == 0) {
                    repasCourant = listeRepas.length - 1;
                } else {
                    repasCourant--;
                }
                nomRepas.setText(listeRepas[repasCourant]);
            }

        });

        btnCat1.setOnClickListener(incrementerCat1);
        txtCat1.setOnClickListener(incrementerCat1);

        btnCat2.setOnClickListener(incrementerCat2);
        txtCat2.setOnClickListener(incrementerCat2);

        btnCat3.setOnClickListener(incrementerCat3);
        txtCat3.setOnClickListener(incrementerCat3);

        btnCat4.setOnClickListener(incrementerCat4);
        txtCat4.setOnClickListener(incrementerCat4);

        btnCat5.setOnClickListener(incrementerCat5);
        txtCat5.setOnClickListener(incrementerCat5);

        return rootView;
    }

    private View.OnClickListener openDetailedActivity = new View.OnClickListener() {
        public void onClick(View v) {
            Intent intent = new Intent(FoodFragment.this.getActivity(), FoodDetailedActivity.class);
            startActivity(intent);
        }
    };

    private View.OnClickListener incrementerCat1 = new View.OnClickListener() {
        public void onClick(View v) {
            int portions = Integer.parseInt(txtCat1.getText().toString()) + 1;
            if(portions < 99) {
                txtCat1.setText(Integer.toString(portions));
            }
        }
    };

    private View.OnClickListener incrementerCat2 = new View.OnClickListener() {
        public void onClick(View v) {
            int portions = Integer.parseInt(txtCat2.getText().toString()) + 1;
            if(portions < 99) {
                txtCat2.setText(Integer.toString(portions));
            }
        }
    };
    private View.OnClickListener incrementerCat3 = new View.OnClickListener() {
        public void onClick(View v) {
            int portions = Integer.parseInt(txtCat3.getText().toString()) + 1;
            if(portions < 99) {
                txtCat3.setText(Integer.toString(portions));
            }
        }
    };

    private View.OnClickListener incrementerCat4 = new View.OnClickListener() {
        public void onClick(View v) {
            int portions = Integer.parseInt(txtCat4.getText().toString()) + 1;
            if(portions < 99) {
                txtCat4.setText(Integer.toString(portions));
            }
        }
    };

    private View.OnClickListener incrementerCat5 = new View.OnClickListener() {
        public void onClick(View v) {
            int portions = Integer.parseInt(txtCat5.getText().toString()) + 1;
            if(portions < 99) {
                txtCat5.setText(Integer.toString(portions));
            }
        }
    };


}
