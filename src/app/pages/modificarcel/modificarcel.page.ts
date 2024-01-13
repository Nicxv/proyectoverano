import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-modificarcel',
  templateUrl: './modificarcel.page.html',
  styleUrls: ['./modificarcel.page.scss'],
})
export class ModificarcelPage implements OnInit {
  productoRecibido: any;

  constructor(private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
      this.productoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['productoEnviado'];
      }
    })
   }

   tomarFoto = async() =>{
    const imagen = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
    });
    this.productoRecibido = imagen.dataUrl;
  };

   modificar(){
    this.bd.modificarProducto(this.productoRecibido.id_producto, this.productoRecibido.nombrep, this.productoRecibido.descripcion, this.productoRecibido.stock, this.productoRecibido.precio, this.productoRecibido.foto, this.productoRecibido.fk_id_categoria);

    this.router.navigate(['/listacel']);
   }



  ngOnInit() {
  }

}
