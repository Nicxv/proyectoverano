import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  usuarioRecibido: any;

  constructor(private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) { 
    //capturar las variables de contexto que vienen en el navigation extras
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
      }
    })
  }

  ngOnInit() {
  }

  modificar(){
    this.bd.modificarUsuario(this.usuarioRecibido.id_usuario, this.usuarioRecibido.correo, this.usuarioRecibido.clave, this.usuarioRecibido.fk_id_rol);

    this.router.navigate(['/listar']);

  }

}
