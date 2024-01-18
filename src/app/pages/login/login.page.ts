import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string ="";
  clave: string ="";

  userCorrecto: string ="Admin";
  claveCorrecta: string ="12345";

  usuarioRecibido: string = "";
  claveRecibida: string = "";

  constructor(private bd: BdregistroService,private alertController: AlertController, private toastController: ToastController, private router: Router, private activeRouter: ActivatedRoute) {
    

   }

   login(){
      //verificar que no esten vacios y luego si no estan vacios llamar al login de BD
      this.bd.IniciarSesion(this.usuario, this.clave);
      this.usuarioAutenticado = this.bd.UsuarioAutenticado; 

   }



  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    // Inicializar el estado de autenticación al cargar el componente
    this.usuarioAutenticado = this.bd.UsuarioAutenticado;
  }
 
}
