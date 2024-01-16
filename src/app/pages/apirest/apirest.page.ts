import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {

  usuarios: any;

  constructor(private api: ApirestService) { }

  getUsuarios(){
    this.api.obtenerUsuarios().subscribe(res=>{
      this.usuarios = res;
    })
  }


  ngOnInit() {
  }

}
