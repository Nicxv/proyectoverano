import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  perfilRecibido: any;
  constructor(private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) { 

    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
      this.perfilRecibido = this.router.getCurrentNavigation()?.extras?.state?.['perfilRecibido'];
      }
    })
  }


  tomarFoto = async() =>{
    const imagen = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
    });
    this.perfilRecibido.foto = imagen.dataUrl;

  };

  modificarPerfil(){
    this.bd.modificarPerfil(this.perfilRecibido.nombreu, this.perfilRecibido.apellido, this.perfilRecibido.correo, this.perfilRecibido.telefono, this.perfilRecibido.foto, );

    this.router.navigate(['/perfil']);
   }
  ngOnInit() {
  }

}
