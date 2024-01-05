import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  usuarioRecibido: string = "";
  claveRecibida: string = "";

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router, private activeRouter: ActivatedRoute) {
    //nos suscribimos a la promise de recepcion de datos
    this.activeRouter.queryParams.subscribe(param =>{
      //pregintamos si viene informacion en la redireccion
      if(this.router.getCurrentNavigation()?.extras.state){
        this,this.claveRecibida = this.router.getCurrentNavigation()?.extras?.
        state?.['claveEnviado'];
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.
        state?.['usuarioEnviado']; 

      }
    }) 


   }

   login(){
    if (this.usuario == this.usuarioRecibido && this.clave == this.claveRecibida){
      this.presentAlert("Bienvenido ");
      this.router.navigate(['/iphone']);
    }else{
      this.presentAlert("Usuario y/o clave incorrecta");
    }
   }


  loginAdmin(){
    if(this.usuario == this.userCorrecto && this.clave == this.claveCorrecta){
      this.presentAlert("Bienvenido Administrador");
      this.router.navigate(['/home']);
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
