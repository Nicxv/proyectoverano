import { Component, OnInit } from '@angular/core';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  arregloUsuarios: any;
  constructor(public bd: BdregistroService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res=>{
      if(res){
        //subscribo al observable de usuarios
        this.bd.fetchUsuarios().subscribe(data=>{
          this.arregloUsuarios = data;
        })
      }
    })
    
  }

  eliminarU(x:any){
    this.bd.eliminarUsuario(x.id_usuario);
  }

}