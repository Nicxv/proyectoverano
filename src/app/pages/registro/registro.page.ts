import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string="";
  apellido: string="";
  clave: string ="";
  confirmarClave: string ="";
  telefono: string = "";
  mail:string ="";
  error:string ="";
  usuarioError: string="";
  claveError: string="";
  fotoU: any;
  usuarioAutenticado: boolean = false;



  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router, private bd: BdregistroService) { }


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
  
    this.fotoU = image.dataUrl; 
  
    
  };

  registro(){

    if (!this.nombre || !this.clave || !this.confirmarClave || !this.nombre ||!this.telefono || !this.mail || !this.apellido ) {
      this.error = 'Todos los campos son obligatorios.';
    } else if (this.clave !== this.confirmarClave) { 
      this.error = 'Las claves no coinciden.';
    } else {
      // Realizar el proceso de registro aquí 
      this.error = ''; // Limpiar el mensaje de error
      // Redirigir a la página de éxito o hacer lo que sea necesario
    }  

    if (!this.usuarioError && !this.claveError && !this.error) {
      //llamamos a la BD para insrtar
      this.bd.insertarUsuario(this.nombre, this.apellido, this.mail, this.telefono, this.clave, this.fotoU, 1);
    }
  }

  


  ngOnInit() {
    this.bd.usuarioAutenticado$.subscribe((estado: boolean) => {
      this.usuarioAutenticado = estado;
    });
  }

}
