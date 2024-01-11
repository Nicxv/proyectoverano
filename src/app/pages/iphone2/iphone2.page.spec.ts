import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iphone2Page } from './iphone2.page';

describe('Iphone2Page', () => {
  let component: Iphone2Page;
  let fixture: ComponentFixture<Iphone2Page>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(Iphone2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
