import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

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

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { }


  login(){
    if(this.usuario == this.userCorrecto && this.clave == this.claveCorrecta){
      this.presentAlert("Bienvenido");
      this.router.navigate(['/']);
    }else{
      this.presentAlert("Usuario y/o Clave incorrecta");
    }
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
  }
 
}
