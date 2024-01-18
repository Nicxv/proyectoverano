import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacelPage } from './listacel.page';

describe('ListacelPage', () => {
  let component: ListacelPage;
  let fixture: ComponentFixture<ListacelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListacelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
