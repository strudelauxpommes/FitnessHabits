package com.strudelauxpommes.fitnesshabits.data.repository;

import android.annotation.SuppressLint;
import android.arch.lifecycle.LiveData;
import android.os.AsyncTask;
import android.support.annotation.MainThread;
import android.support.annotation.NonNull;

import com.strudelauxpommes.fitnesshabits.data.DatabaseResource;
import com.strudelauxpommes.fitnesshabits.data.dao.CommentDataDao;
import com.strudelauxpommes.fitnesshabits.data.dao.DrinkDataDAO;
import com.strudelauxpommes.fitnesshabits.data.model.DrinkData;
import com.strudelauxpommes.fitnesshabits.data.model.record.CommentData;
import com.strudelauxpommes.fitnesshabits.data.model.record.DrinkCategory;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thomas on 2017-11-25.
 */

public class CommentDataRepository {
    private LiveData<CommentData> commentAlcool;
    private LiveData<CommentData> commentDrink;
    private LiveData<CommentData> commentFood;
    private LiveData<CommentData> commentPhysical;
    private LiveData<CommentData> commentSleep;
    private LiveData<CommentData> commentWeight;
    private CommentDataDao commentDataDao;

    public CommentDataRepository(CommentDataDao commentDataDao) {
        this.commentDataDao = commentDataDao;
    }

    public LiveData<CommentData> loadAlcoolComment() {
        if (commentAlcool == null) {
            CommentData defaultData = new CommentData();
            commentAlcool = new DatabaseResource<CommentData>(defaultData){
                @NonNull
                @Override
                protected LiveData<CommentData> loadFromDb() {
                    return commentDataDao.getAlcoolComment();
                }
            }.getAsLiveData();;
        }
        return commentAlcool;
    }

    public LiveData<CommentData> loadDrinkComment() {
        if (commentDrink == null) {
            CommentData defaultData = new CommentData();
            commentDrink = new DatabaseResource<CommentData>(defaultData){
                @NonNull
                @Override
                protected LiveData<CommentData> loadFromDb() {
                    return commentDataDao.getDrinkComment();
                }
            }.getAsLiveData();;
        }
        return commentDrink;
    }
    public LiveData<CommentData> loadFoodComment() {
        if (commentFood == null) {
            CommentData defaultData = new CommentData();
            commentFood = new DatabaseResource<CommentData>(defaultData){
                @NonNull
                @Override
                protected LiveData<CommentData> loadFromDb() {
                    return commentDataDao.getFoodComment();
                }
            }.getAsLiveData();;
        }
        return commentFood;
    }

    public LiveData<CommentData> loadPhysicalComment() {
        if (commentPhysical == null) {
            CommentData defaultData = new CommentData();
            commentPhysical = new DatabaseResource<CommentData>(defaultData){
                @NonNull
                @Override
                protected LiveData<CommentData> loadFromDb() {
                    return commentDataDao.getPhysicalComment();
                }
            }.getAsLiveData();;
        }
        return commentPhysical;
    }

    public LiveData<CommentData> loadSleepComment() {
        if (commentSleep == null) {
            CommentData defaultData = new CommentData();
            commentSleep = new DatabaseResource<CommentData>(defaultData){
                @NonNull
                @Override
                protected LiveData<CommentData> loadFromDb() {
                    return commentDataDao.getSleepComment();
                }
            }.getAsLiveData();;
        }
        return commentSleep;
    }

    public LiveData<CommentData> loadWeightComment() {
        if (commentWeight == null) {
            CommentData defaultData = new CommentData();
            commentWeight = new DatabaseResource<CommentData>(defaultData){
                @NonNull
                @Override
                protected LiveData<CommentData> loadFromDb() {
                    return commentDataDao.getWeightComment();
                }
            }.getAsLiveData();;
        }
        return commentWeight;
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveAlcoolComment(CommentData comment) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                comment.setCategory(0);
                commentDataDao.insertOrUpdateComment(comment);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveDrinkComment(CommentData comment) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                comment.setCategory(1);
                commentDataDao.insertOrUpdateComment(comment);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveFoodComment(CommentData comment) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                comment.setCategory(2);
                commentDataDao.insertOrUpdateComment(comment);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void savePhysicalComment(CommentData comment) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                comment.setCategory(3);
                commentDataDao.insertOrUpdateComment(comment);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveSleepComment(CommentData comment) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                comment.setCategory(4);
                commentDataDao.insertOrUpdateComment(comment);
                return null;
            }
        }.execute();
    }

    @SuppressLint("StaticFieldLeak")
    @MainThread
    public void saveWeightComment(CommentData comment) {
        new AsyncTask<Void,Void,Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                comment.setCategory(5);
                commentDataDao.insertOrUpdateComment(comment);
                return null;
            }
        }.execute();
    }
}
