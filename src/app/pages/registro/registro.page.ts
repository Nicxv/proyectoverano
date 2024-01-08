import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string="";
  usuario: string="";
  clave: string ="";
  confirmarClave: string ="";
  telefono: string = "";
  mail:string ="";
  fechaNacimiento: string="";
  error:string ="";
  usuarioError: string="";
  claveError: string="";





  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { }

  registro(){

    if (!this.usuario || !this.clave || !this.confirmarClave || !this.nombre ||!this.telefono || !this.mail || !this.fechaNacimiento ) {
      this.error = 'Todos los campos son obligatorios.';
    } else if (this.clave !== this.confirmarClave) { 
      this.error = 'Las claves no coinciden.';
    } else {
      // Realizar el proceso de registro aquí 
      this.error = ''; // Limpiar el mensaje de error
      // Redirigir a la página de éxito o hacer lo que sea necesario
    }  

    if (!this.usuarioError && !this.claveError && !this.error) {
      // Si no hay errores en ningún campo, redirigir a otra página
      this.error = 'Todos los campos son obligatorios.';
      let navigationExtras: NavigationExtras = {
        state: {
          nombreEnviado: this.nombre,
          usuarioEnviado: this.usuario,
          claveEnviado: this.clave,
          telefonoEnviado: this.telefono,
          mailEnviado: this.mail,
          fechaEnviado: this.fechaNacimiento
        }
      }
      this.router.navigate(['/login'], navigationExtras);
    }
  }

  


  ngOnInit() {
  }

}
