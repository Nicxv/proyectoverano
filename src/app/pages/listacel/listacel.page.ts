import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-listacel',
  templateUrl: './listacel.page.html',
  styleUrls: ['./listacel.page.scss'],
})
export class ListacelPage implements OnInit {

  arregloProductos: any;


  
  constructor(public bd: BdregistroService, private router: Router) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res=>{
      if(res){
        this.bd.fetchProductos().subscribe(data=>{
          this.arregloProductos = data;
        })
      }
    })
  }

  eliminarP(x:any){
    this.bd.eliminarProducto(x.id_producto);
  }

  modificarP(x:any){
    //variable de contexto para enviar los datos
    let navigationExtras: NavigationExtras = {
      state: {
        productoEnviado: x
      }
    }
    //redireccionar a la pagina de modificar
    this.router.navigate(['/modificarcel'],navigationExtras);
  }




}
