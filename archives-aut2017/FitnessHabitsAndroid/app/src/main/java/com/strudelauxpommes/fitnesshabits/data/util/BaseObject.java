package com.strudelauxpommes.fitnesshabits.data.util;


import android.util.Log;

public class BaseObject {

    public static void assertThat(boolean condition) {
        if(!condition) {
            throw new RuntimeException("assertion error");
        }
    }

    public static void print(String message) {
        Log.d("print", message);
    }

}
