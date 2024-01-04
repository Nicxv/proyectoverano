import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  edad: number = 34;
  primerNombre: string = "Jose";
  lista: any;
  arreglo: any = [];
  primerApellido = "Rosales";

  usuario: string ="";
  clave: string ="";

  userCorrecto: string ="Admin";
  claveCorrecta: string ="123456789";

  listaPersonas: any = [
    {
      nombre: "Victor",
      edad: 37 
    
    },
    {
      nombre: "Maria",
      edad: 29
    }
  ]

  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { }
//alerta insrusiva
  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
//alerta con mensaje
  async presentToast(msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      position: 'bottom',
    });

    await toast.present();
  }







  mostrarNombre(){

  }

  sumar(numero1:number,numero2:number){

  }

  sumar2(a:number,b:number){
    let c=a+b;
    return c;
  }

  irpagina2(){
    //this.presentAlert("Hola Mundo");
    this.presentToast("Hola mundo")
    if(this.edad >= 34){
      this.router.navigate(['/pagina2'])
    }

  }
//loguearse con un usuario y clave determinados
  login(){
    if(this.usuario == this.userCorrecto && this.clave == this.claveCorrecta){
      this.presentAlert("Bienvenido");
      //crear variable de contexto
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          claveEnviado: this.clave
        }
      }
      this.router.navigate(['/pagina2'], navigationExtras);
    }else{
      this.presentAlert("Usuario y/o Clave incorrecta");
    }
  }

  ngOnInit() {
  }

}
