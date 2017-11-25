package com.strudelauxpommes.fitnesshabits.sleep;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.LinearLayout;

import com.strudelauxpommes.fitnesshabits.R;

public class SleepActivity extends AppCompatActivity {
    public int numberOfLines = 3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sommeil);
    }
    public void Add_Line() {
        // add edittext
        LinearLayout ll = (LinearLayout)findViewById(R.id.linearLayoutDecisions);
        EditText et = new EditText(this);
        LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        et.setLayoutParams(p);
        et.setText("Text");
        et.setId(numberOfLines + 1);
        ll.addView(et);
        numberOfLines++;
    }

}
