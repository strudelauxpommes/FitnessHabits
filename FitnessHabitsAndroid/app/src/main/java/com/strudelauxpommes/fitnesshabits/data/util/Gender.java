package com.strudelauxpommes.fitnesshabits.data.util;

public enum Gender {

    MALE(111), // TODO: spécifier les bonnes valeurs, pour que ça soit plus explicit
    FEMALE(222),
    OTHER(333);

    int value;

    Gender(int value) {
        this.value = value;
    }

}

