import { Component } from '@angular/core';
import { BdregistroService } from './services/bdregistro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuarioAutenticado: boolean = false;

  constructor(private bd: BdregistroService, private router:Router) {}

  ngOnInit(){
    this.bd.usuarioAutenticado$.subscribe((estado: boolean) => {
      this.usuarioAutenticado = estado;
    });
  }
  cerrarSesion() {
    this.bd.CerrarSesion();
    this.router.navigate(['/login']);

    // Agrega aquí cualquier otra lógica relacionada con cerrar sesión (por ejemplo, redirección a la página de inicio)
  }
}
