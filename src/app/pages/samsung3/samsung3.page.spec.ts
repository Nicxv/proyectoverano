import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Samsung3Page } from './samsung3.page';

describe('Samsung3Page', () => {
  let component: Samsung3Page;
  let fixture: ComponentFixture<Samsung3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Samsung3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
