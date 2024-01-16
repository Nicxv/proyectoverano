import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, GalleryImageOptions, GalleryPhotos } from '@capacitor/camera';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-agregarcel',
  templateUrl: './agregarcel.page.html',
  styleUrls: ['./agregarcel.page.scss'],
})
export class AgregarcelPage implements OnInit {
  nombreP: string = "";
  descripcionP: string = "";
  stockP: number = 0;
  precioP: number = 0;
  fotoP: any ;
  idC: any ;

  constructor(public bd: BdregistroService, public router: Router) { }

  tomarFoto = async() =>{
    const imagen = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
    });
    this.fotoP = imagen.dataUrl;
  };

  pickImages = async (options: GalleryImageOptions) => {
    Promise <GalleryPhotos>
 }

  insertarP(){
    this.bd.insertarProducto(this.nombreP,this.descripcionP,this.stockP,this.precioP,this.fotoP,this.idC);
    this.router.navigate(['/listacel'])
  } 

  ngOnInit() {
  }

}
