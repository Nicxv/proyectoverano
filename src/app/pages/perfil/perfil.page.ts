import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil: any;


  constructor(private bd: BdregistroService, private activeRouter: ActivatedRoute, private router: Router) {}
    

  ngOnInit() {
  
    this.bd.dbState().subscribe(res=>{
      if(res){
        //subscribo al observable de usuarios
        this.bd.fetchUsuarios().subscribe(data=>{
          this.perfil = data;
        })
      }
    })
  }
  modificarU(x:any){
    //variable de contexto para enviar los datos
    let navigationExtras: NavigationExtras = {
      state: {
        usuarioEnviado: x
      }
    }
    //redireccionar a la pagina de modificar
    this.router.navigate(['/'],navigationExtras);
  }



}
