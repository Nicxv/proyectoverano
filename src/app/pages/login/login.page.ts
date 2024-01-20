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
  usuarioAutenticado: boolean = false;

  constructor(private bd: BdregistroService,private alertController: AlertController, private toastController: ToastController, private router: Router, private activeRouter: ActivatedRoute) {
    

   }

   login(){
      //verificar que no esten vacios y luego si no estan vacios llamar al login de BD
      this.bd.IniciarSesion(this.usuario, this.clave);
      
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
    this.bd.usuarioAutenticado$.subscribe((estado: boolean) => {
      this.usuarioAutenticado = estado;
    });
  }
 
}
