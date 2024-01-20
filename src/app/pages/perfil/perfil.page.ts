import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';
import { RegistroPage } from '../registro/registro.page';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfilRecibido: any;
  perfilUsuario: any = {};


  constructor(private alertController: AlertController, private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) { }
  tomarFoto = async() =>{
    const imagen = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
    });
    this.perfilRecibido.foto = imagen.dataUrl;

  };

  ngOnInit() {
  
     // Utilizar paramMap para obtener el ID del usuario desde los parámetros de la URL
    this.activedRouter.paramMap.subscribe(params => {
      // Obtener el ID del usuario desde los parámetros de la URL
      const idUsuario = params.get('idUsuario');

      // Verificar si el idUsuario existe y no es nulo
      if (idUsuario) {
        // Verificar si el idUsuario ya es un número o convertirlo si es necesario
        const idUsuarioNumerico = isNaN(+idUsuario) ? parseInt(idUsuario, 10) : +idUsuario;

        // Obtener la información del perfil del usuario
        this.bd.ObtenerPerfilUsuario(idUsuarioNumerico).then((perfil) => {
          if (perfil) {
            this.perfilUsuario = perfil;
          } else {
            this.presentAlert("No se pudo obtener la información del perfil del usuario.");
          }
        });
      } else {
        this.presentAlert("ID de usuario no proporcionado en la URL");
      }
    });
    
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
   async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
