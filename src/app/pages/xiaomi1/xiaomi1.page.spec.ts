import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Xiaomi1Page } from './xiaomi1.page';

describe('Xiaomi1Page', () => {
  let component: Xiaomi1Page;
  let fixture: ComponentFixture<Xiaomi1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Xiaomi1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
