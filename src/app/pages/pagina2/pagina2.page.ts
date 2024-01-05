import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  usuarioRecibido: string = "";
  claveRecibida: string = "";

  primerNombre: string = "Jose";

  constructor(private router: Router, private activeRouter: ActivatedRoute) {
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

  ngOnInit() {
  }

} 
