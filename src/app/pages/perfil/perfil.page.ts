import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';
import { RegistroPage } from '../registro/registro.page';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfilRecibido: any;


  constructor( private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) {
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

  ngOnInit() {
  
    this.bd.dbState().subscribe(res=>{
      if(res){
        //subscribo al observable de usuarios
        this.bd.fetchUsuarios().subscribe(data=>{
          this.perfilRecibido = data;
        })
      }
    })
  }
  modificarU(x:any){
    //variable de contexto para enviar los datos
    let navigationExtras: NavigationExtras = {
      state: {
        usuarioEnviado: x
      }
    }
    //redireccionar a la pagina de modificar
    this.router.navigate(['/modificarperfil'],navigationExtras);
  }

  modificarPerfil(){
    this.bd.modificarPerfil(this.perfilRecibido.nombreu, this.perfilRecibido.apellido, this.perfilRecibido.correo, this.perfilRecibido.telefono, this.perfilRecibido.foto, );

    this.router.navigate(['/modificarperfil']);
   }


}
