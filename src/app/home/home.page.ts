import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  primerNombre: string = "Jose";
idUsuarioRecibido: number = 0;
  constructor(private router: Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.idUsuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
      }
    })
  }

}
