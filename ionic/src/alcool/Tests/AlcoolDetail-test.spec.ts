import { AlcoolDetail } from '../AlcoolDetail.js';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Component } from '@angular/core';


describe('AlcoolDetail', () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                AlcoolDetail
            ]   
        }).compileComponents();
    }));

    it('should create the page AlcoolDetail', async(() => {
        const fixture = TestBed.createComponent(AlcoolDetail);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement).toBeTruthy();
    }));
});