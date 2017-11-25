package com.strudelauxpommes.fitnesshabits.data.util;

public enum Gender {

    MALE(111), // TODO: spécifier les bonnes valeurs, pour que ça soit plus explicit
    FEMALE(222),
    OTHER(333);

    Integer value;

    Gender(int value) {
        this.value = value;
    }

    public static Gender decodeFromInt(Integer value) {

        // TODO: trouver le moyen d'enlever cette horreur!!!!!!!!!!!!!!

        if(value == 111) {
            return Gender.MALE;
        }

        if(value == 222) {
            return Gender.FEMALE;
        }

        if(value == 333) {
            return Gender.OTHER;
        }

        BaseObject.assertThat(false);

        return null;
    }

    public Integer encodeToInt() {
        return value;
    }

}

