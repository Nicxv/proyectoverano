import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
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

 datosUsuario: any = {}; // Almacena los datos del usuario
 


  constructor(private alertController: AlertController,private router:Router, private route: ActivatedRoute, private bd: BdregistroService) {
   

 }
   /*tomarFoto = async() =>{
    const imagen = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
    });
    this.perfilRecibido.foto = imagen.dataUrl;

  };*/

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const idUsuario = params['idEnviado'];
      if (idUsuario) {
        this.bd.ObtenerDatosUsuarioPorId(idUsuario).then(datos => {
          if (datos) {
            this.datosUsuario = datos;
          } else {
            this.presentAlert("No se encontraron datos del usuario.");
          }
        });
      } else {
        this.presentAlert("ID de usuario no proporcionado en los parámetros de la URL.");
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

 /* modificarPerfil(){
    this.bd.modificarPerfil(this.perfilRecibido.nombreu, this.perfilRecibido.apellido, this.perfilRecibido.correo, this.perfilRecibido.telefono, this.perfilRecibido.foto, );

    this.router.navigate(['/modificarperfil']);
   }*/
   async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
