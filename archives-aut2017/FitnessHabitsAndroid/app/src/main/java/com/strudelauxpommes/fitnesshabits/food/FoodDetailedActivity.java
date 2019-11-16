package com.strudelauxpommes.fitnesshabits.food;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.R;

public class FoodDetailedActivity extends AppCompatActivity {

    int repasCourant = 0;
    Button minus_fruit;
    Button plus_fruit;
    TextView nb_fruit;
    Button minus_vegetable;
    Button plus_vegetable;
    TextView nb_vegetable;
    Button minus_gras;
    Button plus_gras;
    TextView nb_gras;
    Button minus_glucide;
    Button plus_glucide;
    TextView nb_glucide;
    Button minus_prots;
    Button plus_prots;
    TextView nb_prots;
    CheckBox checkbox_fruit;
    CheckBox checkbox_vegetable;
    CheckBox checkbox_gras_;
    CheckBox checkbox_glucide;
    CheckBox checkbox_prots;
    Button prec;
    Button next;
    TextView repas;

    @SuppressLint("WrongViewCast")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_food_detailed);

        minus_fruit = findViewById(R.id.button_minus_fruit);
        plus_fruit = findViewById(R.id.button_plus_fruit);
        nb_fruit = findViewById(R.id.nb_fruit);
        minus_vegetable = findViewById(R.id.button_minus_vegetable);
        plus_vegetable = findViewById(R.id.button_plus_vegetable);
        nb_vegetable = findViewById(R.id.nb_vegetable);
        minus_gras = findViewById(R.id.button_minus_gras);
        plus_gras = findViewById(R.id.button_plus_gras);
        nb_gras = findViewById(R.id.nb_gras);
        minus_glucide = findViewById(R.id.button_minus_glucide);
        plus_glucide = findViewById(R.id.button_plus_glucide);
        nb_glucide = findViewById(R.id.nb_glucide);
        minus_prots = findViewById(R.id.button_minus_prots);
        plus_prots = findViewById(R.id.button_plus_prots);
        nb_prots = findViewById(R.id.nb_prots);
        checkbox_fruit = findViewById(R.id.checkBox_fruits);
        checkbox_vegetable = findViewById(R.id.checkBox_vegetable);
        checkbox_gras_ = findViewById(R.id.checkBox_gras);
        checkbox_glucide = findViewById(R.id.checkBox_glucide);
        checkbox_prots = findViewById(R.id.checkBox_prots);
        prec = findViewById(R.id.precedent);
        next = findViewById(R.id.next);
        repas = findViewById(R.id.repasCourrant);

        plus_fruit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int fruit = Integer.parseInt(nb_fruit.getText().toString()) + 1;
                if(fruit <= 99)
                    nb_fruit.setText(Integer.toString(fruit));
            }
        });

        minus_fruit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int fruit = Integer.parseInt(nb_fruit.getText().toString()) - 1;
                if(fruit >= 0)
                    nb_fruit.setText(Integer.toString(fruit));
            }
        });

        plus_vegetable.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int vegetable = Integer.parseInt(nb_vegetable.getText().toString()) + 1;
                if(vegetable <= 99)
                    nb_vegetable.setText(Integer.toString(vegetable));
            }
        });

        minus_vegetable.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int vegetable = Integer.parseInt(nb_vegetable.getText().toString()) - 1;
                if(vegetable >= 0)
                    nb_vegetable.setText(Integer.toString(vegetable));
            }
        });

        plus_gras.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int gras = Integer.parseInt(nb_gras.getText().toString()) + 1;
                if(gras <= 99)
                    nb_gras.setText(Integer.toString(gras));
            }
        });

        minus_gras.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int gras = Integer.parseInt(nb_gras.getText().toString()) - 1;
                if(gras >= 0)
                    nb_gras.setText(Integer.toString(gras));
            }
        });

        plus_glucide.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int glucide = Integer.parseInt(nb_glucide.getText().toString()) + 1;
                if(glucide <= 99)
                    nb_glucide.setText(Integer.toString(glucide));
            }
        });

        minus_glucide.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int glucide = Integer.parseInt(nb_glucide.getText().toString()) - 1;
                if(glucide >= 0)
                    nb_glucide.setText(Integer.toString(glucide));
            }
        });

        plus_prots.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int prots = Integer.parseInt(nb_prots.getText().toString()) + 1;
                if(prots <= 99)
                    nb_prots.setText(Integer.toString(prots));
            }
        });

        minus_prots.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(nb_prots.getText() != null) {
                    int prots = Integer.parseInt(nb_prots.getText().toString()) - 1;
                    if (prots >= 0)
                        nb_prots.setText(Integer.toString(prots));
                }
            }
        });

        next.setOnClickListener(new View.OnClickListener() {
            String listeRepas[] = {"Petit-Déj.","Coll. AM","Diner", "Coll. PM", "Souper", "Coll. soir"};
            public void onClick(View v) {
                if(repasCourant == listeRepas.length - 1) {
                    repasCourant = 0;
                } else {
                    repasCourant++;
                }
                repas.setText(listeRepas[repasCourant]);
            }
        });

        prec.setOnClickListener(new View.OnClickListener() {
            String listeRepas[] = {"Petit-Déj.","Coll. AM","Diner", "Coll. PM", "Souper", "Coll. soir"};
            public void onClick(View v) {
                if(repasCourant == 0) {
                    repasCourant = listeRepas.length -1;
                } else {
                    repasCourant--;
                }
                repas.setText(listeRepas[repasCourant]);
            }
        });


    }
}
