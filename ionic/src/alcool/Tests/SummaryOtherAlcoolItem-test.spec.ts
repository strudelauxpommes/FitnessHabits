import { SummaryOtherAlcoolItem } from '../Components/SummaryOtherAlcoolItem.js';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser"
import { Component } from '@angular/core';


describe('SummaryOtherAlcoolItem', () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                SummaryOtherAlcoolItem
            ],
        }).compileComponents();
    }));

    it('should create a SummaryOtherAlcoolItem', async(() => {
        const fixture = TestBed.createComponent(SummaryOtherAlcoolItem);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement).toBeTruthy();
    }));
});