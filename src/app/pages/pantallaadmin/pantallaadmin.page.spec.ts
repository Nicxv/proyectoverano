import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaadminPage } from './pantallaadmin.page';

describe('PantallaadminPage', () => {
  let component: PantallaadminPage;
  let fixture: ComponentFixture<PantallaadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PantallaadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
