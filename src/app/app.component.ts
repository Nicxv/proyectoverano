import { Component } from '@angular/core';
import { BdregistroService } from './services/bdregistro.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private bd: BdregistroService) {}
  cerrarSesion() {
    
    this.bd.CerrarSesion();
  }
}
