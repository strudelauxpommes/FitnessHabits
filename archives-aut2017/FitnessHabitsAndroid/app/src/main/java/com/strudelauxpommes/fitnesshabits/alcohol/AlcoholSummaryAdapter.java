package com.strudelauxpommes.fitnesshabits.alcohol;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.strudelauxpommes.fitnesshabits.R;

public class AlcoholSummaryAdapter extends RecyclerView.Adapter<AlcoholSummaryAdapter.ViewHolder> {


    @Override
    public AlcoholSummaryAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        //ViewHolder viewHolder = new ViewHolder();
        //return viewHolder;
        return null;
    }

    @Override
    public void onBindViewHolder(AlcoholSummaryAdapter.ViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 0;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder{
        TextView alcoholName;
        TextView portions;
        public ViewHolder(View view) {
            super(view);
            alcoholName = view.findViewById(R.id.alcohol_name);
            portions = view.findViewById(R.id.portions);
        }
    }
}
