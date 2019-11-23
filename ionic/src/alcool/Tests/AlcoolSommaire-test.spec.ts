import { AlcoolSommaire } from '../AlcoolSommaire.js';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Component } from '@angular/core';


describe('AlcoolSommaire', () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                AlcoolSommaire
            ]
        }).compileComponents();
    }));

    it('should create the page AlcoolSommaire', async(() => {
        const fixture = TestBed.createComponent(AlcoolSommaire);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement).toBeTruthy();
    }));
});