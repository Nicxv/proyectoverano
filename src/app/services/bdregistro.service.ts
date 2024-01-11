import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuarios } from './usuarios';
@Injectable({
  providedIn: 'root'
})
export class BdregistroService {

  //variable para guardar la conexion a la base de datos
  public conexionBD!: SQLiteObject;

  //variables para las tablas de nuestra base de datos
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL);";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, correo VARCHAR(100) NOT NULL, clave VARCHAR(16) NOT NULL, fk_id_rol INTEGER, FOREIGN KEY(fk_id_rol) REFERENCES rol(id_rol));";

  //variables para insert por defecto
  insertRol: string = "INSERT or IGNORE INTO rol(id_rol,nombre) VALUES (1,'Cliente');";
  insertRol2: string = "INSERT or IGNORE INTO rol(id_rol,nombre) VALUES (2,'Administrador');";

  //variables para los observables de las consultas a las tablas
  listaUsuarios = new BehaviorSubject([]);


  //observable para el estatus de la base de datos
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
  }

  //funciones que retornen los observables creados
  dbState(){
    return this.isDBReady.asObservable();
  }

  fetchUsuarios(): Observable<Usuarios[]>{
    return this.listaUsuarios.asObservable();
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  //metodo para crear la base de datos
  crearBD() {
    //verificamos que la plataforma este lista
    this.platform.ready().then(() => {
      //crear la base de datos
      this.sqlite.create({
        name: 'usuariostest.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        //guardar mi conexion a base de datos
        this.conexionBD = db;
        //crear las tablas en mi base de datos
        this.crearTablas();
      }).catch(e => {
        //mostrar el error del create
        this.presentAlert("Error en crearDB: " + JSON.stringify(e));
      })




    }).catch(e => {
      //mostrar el error del ready
      this.presentAlert("Error en platform: " + JSON.stringify(e));
    })

  }


  async crearTablas() {
    //this.presentAlert("0");
    try {
      //ejecutar creacion de tablas
      await this.conexionBD.executeSql(this.tablaRol,[]);
      //this.presentAlert("1");
      await this.conexionBD.executeSql(this.tablaUsuario,[]);
      //this.presentAlert("2");
      //ejecuto los insert en las tablas
      await this.conexionBD.executeSql(this.insertRol,[]);
      //this.presentAlert("3");
      await this.conexionBD.executeSql(this.insertRol2,[]);
      //this.presentAlert("4");
      this.buscarUsuarios();
      //this.presentAlert("5");
      //actualizo el observable de la base de datos
      this.isDBReady.next(true);
      //this.presentAlert("6");
    }
    catch (e) {
      this.presentAlert("Error en tablas: " + JSON.stringify(e));
    }

  }

  buscarUsuarios(){
    //mandar a ejecutar la sentencia sql
    return this.conexionBD.executeSql('SELECT * FROM usuario INNER JOIN rol ON usuario.fk_id_rol = rol.id_rol',[]).then(res=>{
      //si la consulta se ejecuta correctamente
      //guardamos los registros en una lista
      let items: Usuarios[] = [];
      //verificar si contiene o no registros la consulta
      if(res.rows.length > 0){
        //recorremos los registros para agregarlos a la lista
        for(var i = 0; i < res.rows.length; i++){
          //guardo los registros en la lista
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            correo: res.rows.item(i).correo,
            clave: res.rows.item(i).clave,
            fk_id_rol: res.rows.item(i).fk_id_rol,
            id_rol: res.rows.item(i).id_rol,
            nombre: res.rows.item(i).nombre
          })
        }
      }
      //actualizar el observable
      this.listaUsuarios.next(items as any);

    }).catch(e=>{
      this.presentAlert("Error en select join: " + JSON.stringify(e));
    })
  }


  insertarUsuario(correo:string,clave:string,fk_id_rol:number){
    //ejecutamos el insert
    return this.conexionBD.executeSql('INSERT INTO usuario(correo,clave,fk_id_rol) VALUES (?,?,?)',[correo,clave,fk_id_rol]).then(res=>{
      this.buscarUsuarios();
      this.presentAlert("Usuario Registrado");
    }).catch(e=>{
      this.presentAlert("Error en insert usuario: " + JSON.stringify(e));
    })

  }

  eliminarUsuario(id_usuario:number){
    //ejecutar el delete
    return this.conexionBD.executeSql('DELETE FROM usuario WHERE id_usuario = ?',[id_usuario]).then(res=>{
      this.buscarUsuarios();
      this.presentAlert("Usuario Eliminado");
    }).catch(e=>{
      this.presentAlert("Error en delete usuario: " + JSON.stringify(e));
    })
  }

}
