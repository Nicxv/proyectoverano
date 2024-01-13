import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarcelPage } from './agregarcel.page';

describe('AgregarcelPage', () => {
  let component: AgregarcelPage;
  let fixture: ComponentFixture<AgregarcelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarcelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
