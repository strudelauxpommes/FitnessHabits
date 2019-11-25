import { SummaryCardItem } from '../Components/SummaryCardItem.js';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Component } from '@angular/core';
import { Button } from 'selenium-webdriver';


describe('SummaryCardItem', () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                SummaryCardItem
            ]
        }).compileComponents();
    }));

    it('should create a SummaryCardItem', async(() => {
        const fixture = TestBed.createComponent(SummaryCardItem);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement).toBeTruthy();
    }));

    it('should verify if the volume is greater than or equal to 0', () => {
        const fixture = TestBed.createComponent(SummaryCardItem);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement.volume).toBeGreaterThan(0);
    });

    it('should verify that the quantity is greater or equal to 0', () => {
        const fixture = TestBed.createComponent(SummaryCardItem);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement.quantity).toBeGreaterThanOrEqual(0);
    });
});