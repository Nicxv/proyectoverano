import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iphone3Page } from './iphone3.page';

describe('Iphone3Page', () => {
  let component: Iphone3Page;
  let fixture: ComponentFixture<Iphone3Page>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(Iphone3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
