import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarcelPage } from './modificarcel.page';

describe('ModificarcelPage', () => {
  let component: ModificarcelPage;
  let fixture: ComponentFixture<ModificarcelPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule
    fixture = TestBed.createComponent(ModificarcelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
