import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamsungPage } from './samsung.page';

describe('SamsungPage', () => {
  let component: SamsungPage;
  let fixture: ComponentFixture<SamsungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamsungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
