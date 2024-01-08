import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuarioRecibido: string ="";
  nombreRecibido: string ="";
  telefonoRecibido: string ="";
  mailRecibido: string ="";
  fechaRecibido: string ="";

  constructor(private activeRouter: ActivatedRoute, private router: Router) {
    
     //nos suscribimos a la promise de recepcion de datos
     this.activeRouter.queryParams.subscribe(param =>{
      //pregintamos si viene informacion en la redireccion
      if(this.router.getCurrentNavigation()?.extras.state){
        this.nombreRecibido = this.router.getCurrentNavigation()?.extras?.
        state?.['nombreEnviado'];  
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.
        state?.['usuarioEnviado'];  
        this.telefonoRecibido = this.router.getCurrentNavigation()?.extras?.
        state?.['telefonoEnviado'];  
        this.mailRecibido = this.router.getCurrentNavigation()?.extras?.
        state?.['mailEnviado'];  
        this.fechaRecibido = this.router.getCurrentNavigation()?.extras?.
        state?.['fechaEnviado'];  
        
      }
    }) 


   }
    

  ngOnInit() {
  }

}
