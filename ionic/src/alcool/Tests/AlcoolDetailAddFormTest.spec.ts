import { AlcoolSommaireAddFormTest } from '../Components/AlcoolDetailAddForm.js';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Component } from '@angular/core';


describe('AlcoolSommaireAddFormTest', () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                AlcoolSommaireAddFormTest
            ]
        }).compileComponents();
    }));

    it('should create an AlcoolSommaireAddFormTest', async(() => {
        const fixture = TestBed.createComponent(AlcoolSommaireAddFormTest);
        const debugElement = fixture.debugElement.componentInstance;
        expect(debugElement).toBeTruthy();
    }));
});