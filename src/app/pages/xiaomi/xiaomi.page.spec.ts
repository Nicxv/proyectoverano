import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XiaomiPage } from './xiaomi.page';

describe('XiaomiPage', () => {
  let component: XiaomiPage;
  let fixture: ComponentFixture<XiaomiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XiaomiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
