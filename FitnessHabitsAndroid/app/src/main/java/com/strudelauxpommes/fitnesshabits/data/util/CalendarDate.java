package com.strudelauxpommes.fitnesshabits.data.util;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class CalendarDate extends BaseObject {

    static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
    Calendar date;

    public CalendarDate(Calendar date) {
        this.date = date;
    }

    public static CalendarDate now() {
        return new CalendarDate(Calendar.getInstance());
    }

    public Calendar getCalendarDate() {
        // pour le UI.
        return date;
    }

    public static CalendarDate fromYearMonthDay(int year, int month, int day) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(year, month, day);
        return new CalendarDate(calendar);
    }

    public long getTimeInMillis() {
        // utilité: pour la méthode CalendarView::setDate()
        return date.getTimeInMillis();
    }

    public String encodeToString() {
        return format.format(date.getTime());
    }

    public static CalendarDate decodeFromString(String string) {
        Calendar date = Calendar.getInstance();
        try {
            date.setTime(format.parse(string));
        } catch (ParseException e) {
            e.printStackTrace();
            date.clear();
            assertThat(false);
        }
        return new CalendarDate(date);
    }

}