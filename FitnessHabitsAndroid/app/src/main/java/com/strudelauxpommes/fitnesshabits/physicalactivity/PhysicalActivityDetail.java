package com.strudelauxpommes.fitnesshabits.physicalactivity;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RadioButton;
import android.widget.TableLayout;
import android.widget.TableRow;

import com.strudelauxpommes.fitnesshabits.R;

import java.util.ArrayList;

public class PhysicalActivityDetail extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_physical_detail);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
/*
        LinearLayout tableActivity = (LinearLayout) findViewById(R.id.table);

        ViewGroup.LayoutParams params = new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT);
        */

        ArrayList<PhysicalActivity> ListItemTable = new ArrayList<PhysicalActivity>();
        for (int i = 0; i < 4; i++) {


            EditText activity = new EditText(this);
            activity.setText("Activity");


            EditText dure = new EditText(this);
            dure.setText("Dure");


            EditText intensive = new EditText(this);
            intensive.setText("Intensive");


            Button b = new Button(this);
            b.setText("Fav");


            TableLayout tl = (TableLayout) findViewById(R.id.table);
            TableRow tr = new TableRow(this);
            tr.setLayoutParams(new TableRow.LayoutParams(TableRow.LayoutParams.FILL_PARENT, TableRow.LayoutParams.WRAP_CONTENT));
            b.setLayoutParams(new TableRow.LayoutParams(TableRow.LayoutParams.FILL_PARENT, TableRow.LayoutParams.WRAP_CONTENT));
            activity.setLayoutParams(new TableRow.LayoutParams(TableRow.LayoutParams.FILL_PARENT, TableRow.LayoutParams.WRAP_CONTENT));
            dure.setLayoutParams(new TableRow.LayoutParams(TableRow.LayoutParams.FILL_PARENT, TableRow.LayoutParams.WRAP_CONTENT));
            intensive.setLayoutParams(new TableRow.LayoutParams(TableRow.LayoutParams.FILL_PARENT, TableRow.LayoutParams.WRAP_CONTENT));


            tr.addView(b);
            tr.addView(activity);
            tr.addView(dure);
            tr.addView(intensive);

            PhysicalActivity physicalActivity = new PhysicalActivity(
                    activity.getText().toString(),
                    dure.getText().toString(),
                    intensive.getText().toString(),
                    true);

            ListItemTable.add(physicalActivity);

            /* Add row to TableLayout. */
            tl.addView(tr, new TableLayout.LayoutParams(TableLayout.LayoutParams.FILL_PARENT, TableLayout.LayoutParams.WRAP_CONTENT));
        }

    }

}
