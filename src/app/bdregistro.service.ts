import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdregistroService {

   //varibale para guardar la conexion ala bd

public conexionBD!: SQLiteObject;


//varibles para las tablas de bd

tablaRol: string ="CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL);";

tablaUsuario: string ="CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, correo VARCHAR(100) NOT NULL,clave VARCHAR(16) NOT NULL, fk_id_rol INTEGER, FOREING KEY(fk_id_rol) REFERENCES  rol (id_rol));";


// variable para insrt por defecto 

insertRol: string = "INSERT or IGNORE INTO rol (id_rol,nombre) VALUES (1,'Cliente');";
insertRol2: string = "INSERT or IGNORE INTO rol (id_rol,nombre) VALUES (2,'Administrador');";

// variables para los observables de las consultas a las tablas

listaUsuarios = new BehaviorSubject([]);

//observable para el estatus de la base de datos 

private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  alertController: any;

  constructor(private sqlite: SQLite, private platfrom: Platform) { 
    this.crearBD();
  }


  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Mensaje Imprtante',
      message: msj,
      buttons: ['ok'],
    });

    await alert.present();
  }

  // metodopara crer la base de datos

  crearBD(){
    // verificamos que la platafoma este lista

    this.platfrom.ready().then(()=>{

      //cear la base e datos 

      this.sqlite.create({
        name: 'usuarios.db',
        location: 'default'

      }).then((db:SQLiteObject)=>{
        //guardar mi cnexion a base de datos
        this.conexionBD = db;
        //crear las tablas en mi base de datos 
        this.crearTablas();
    


      }).catch(e=>{
        //mostrar error del create 
        this.presentAlert("Error en crearDB;" + JSON.stringify(e));
        

    }).catch(e=>{
      //mostrar el error del ready
      this.presentAlert("error en platform:" + JSON.stringify(e));
    })
  })
}

 async crearTablas(){

    try{
      //ejecutar creacion de tablas
      await this.conexionBD.executeSql(this.tablaRol);
      await this.conexionBD.executeSql(this.tablaUsuario);
  
      //ejecuto los insert en las tablas
  
      await this.conexionBD.executeSql(this.insertRol);
      await this.conexionBD.executeSql(this.insertRol2);
      //actualizo el observable de la base e datos
      this,this.isDBReady.next(true);


    }
    catch(e) {
      this.presentAlert("error en tablas:" + JSON.stringify(e));

    }
    

  }
}
  

