import { AlcoolDetailHeader } from '../Components/AlcoolDetailHeader.js';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Component } from '@angular/core';


describe('AlcoolDetailHeader', () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                AlcoolDetailHeader
            ]
        }).compileComponents();
    }));

    it('should create an AlcoolDetailHeader', async(() => {
        const fixture = TestBed.createComponent(AlcoolDetailHeader);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement).toBeTruthy();
    }));
});