import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Xiaomi3Page } from './xiaomi3.page';

describe('Xiaomi3Page', () => {
  let component: Xiaomi3Page;
  let fixture: ComponentFixture<Xiaomi3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Xiaomi3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
