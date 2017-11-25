package com.strudelauxpommes.fitnesshabits.beverage;


import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.R;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 */
public class BeverageFragment extends Fragment {
    LinearLayout layoutHeader;

    Button btnFav1, btnFav2, btnFav3, btnOthers;
    TextView txtTotal;
    ArrayList<Breuvage> breuvArray;
    int qtyBtn1, qtyBtn2, qtyBtn3;

    public BeverageFragment() {
        // Required empty public constructor

    }

    /**public ArrayList<Breuvage> getFavorites(){

        Breuvage b1 = new Breuvage();
        b1.setName("Eau");
        b1.setEstFavoris(true);
        b1.setQuantite_ml(250);

        Breuvage b2 = new Breuvage();
        b1.setName("Pepsi");
        b1.setEstFavoris(true);
        b1.setQuantite_ml(250);

        Breuvage b3 = new Breuvage();
        b1.setName("Café");
        b1.setEstFavoris(true);
        b1.setQuantite_ml(250);

        ArrayList<Breuvage> listBr = new ArrayList<Breuvage>();
        listBr.add(b1);
        listBr.add(b2);
        listBr.add(b3);

        return  listBr;
    }*/
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        /**
        txtTotal = (TextView) getView().findViewById(R.id.txt_bevTotal);

        breuvArray = getFavorites();
        setNameBtn(btnFav1, breuvArray.get(1), qtyBtn1);
        setNameBtn(btnFav2, breuvArray.get(2), qtyBtn2);
        setNameBtn(btnFav3, breuvArray.get(3), qtyBtn3);
        setTotalTitle();

        layoutHeader =(LinearLayout) getView().findViewById(R.id.layout_bevSumHeader);
        layoutHeader.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                startBeverageDetails();
            }
        });

        btnFav1 =(Button) getView().findViewById(R.id.btn_bevSummaryFav1);
        layoutHeader.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                qtyBtn1++;
                setNameBtn(btnFav1, breuvArray.get(1), qtyBtn1);
                setTotalTitle();
            }
        });
        btnFav2 =(Button) getView().findViewById(R.id.btn_bevSummaryFav2);
        layoutHeader.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                qtyBtn2++;
                setNameBtn(btnFav2, breuvArray.get(2), qtyBtn2);
                setTotalTitle();
            }
        });
        btnFav3 =(Button) getView().findViewById(R.id.btn_bevSummaryFav3);
        layoutHeader.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                qtyBtn3++;
                setNameBtn(btnFav3, breuvArray.get(3), qtyBtn3);
                setTotalTitle();
            }
        });

        btnOthers =(Button) getView().findViewById(R.id.btn_bevSummaryOthers);
        layoutHeader.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                startBeverageDetails();
            }
        });*/

        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_beverage, container, false);
    }


    private void startBeverageDetails(){
        //Intent myIntent = new Intent(getActivity(), BeverageDetailsActivity.class);
        //myIntent.putExtra("key", value); //Optional parameters
        //getActivity().startActivity(myIntent);
    }

    /**
    private void setNameBtn(Button btn, Breuvage b, int qty){
        btn.setText(b.getName()+"-"+b.getQuantite_ml()+"ml    "+ qty);
    }*/

    /**private void setTotalTitle(){
        //add others
         txtTotal.setText( (qtyBtn1+qtyBtn2+qtyBtn3) +"ml");
    }*/
}
