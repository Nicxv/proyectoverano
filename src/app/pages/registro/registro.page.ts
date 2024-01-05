import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string="";
  edad: number =0;
  nombreUsuario: string="";
  clave: string ="";
  confirmarClave: string ="";
  telefono: number = 88888888;
  mail:string ="";




  constructor() { }

  ngOnInit() {
  }

}
