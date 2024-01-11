import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Xiaomi2Page } from './xiaomi2.page';

describe('Xiaomi2Page', () => {
  let component: Xiaomi2Page;
  let fixture: ComponentFixture<Xiaomi2Page>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(Xiaomi2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
