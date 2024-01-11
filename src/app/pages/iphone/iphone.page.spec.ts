import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IphonePage } from './iphone.page';

describe('IphonePage', () => {
  let component: IphonePage;
  let fixture: ComponentFixture<IphonePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(IphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
