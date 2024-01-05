import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Samsung1Page } from './samsung1.page';

describe('Samsung1Page', () => {
  let component: Samsung1Page;
  let fixture: ComponentFixture<Samsung1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Samsung1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
