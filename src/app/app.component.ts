import { Component } from '@angular/core';
import { BdregistroService } from './services/bdregistro.service';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuarioAutenticado: boolean = false;

  constructor(private toastController: ToastController,private bd: BdregistroService, private router:Router) {}

  ngOnInit(){
    this.bd.usuarioAutenticado$.subscribe((estado: boolean) => {
      this.usuarioAutenticado = estado;
    });
  }
  cerrarSesion() {
    this.bd.CerrarSesion();
    this.router.navigate(['/login']);
    this.presentToast("Sesión Terminada");

    // Agrega aquí cualquier otra lógica relacionada con cerrar sesión (por ejemplo, redirección a la página de inicio)
  }
  verPerfil() {
    if (this.bd.usuarioLogeado) {
      let n: NavigationExtras = {
        state: {
          idEnviado: this.bd.usuarioLogeado.id_usuario
        }
      };
      this.router.navigate(['/perfil'], n);
    }
  }

  async presentToast(msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      position: 'bottom',
    });

    await toast.present();
  }
}
