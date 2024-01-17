import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  correoU:string = "";
  claveU: string = "";
  idU: any;

  constructor(public bd: BdregistroService, public router: Router) { }

  insertarU(){
   // this.bd.insertarUsuario(this.correoU,this.claveU,this.idU);
    this.router.navigate(['/listar']);

  }


  ngOnInit() {
  }

}
