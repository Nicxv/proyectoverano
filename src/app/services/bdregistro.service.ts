import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuarios } from './usuarios';
import { Productos } from './productos';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BdregistroService {
  
  private usuarioAutenticadoSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();

  //variable para guardar la conexion a la base de datos
  public conexionBD!: SQLiteObject;

  //variables para las tablas de nuestra base de datos
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, correo VARCHAR(100) NOT NULL, clave VARCHAR(16) NOT NULL, nombre VARCHAR(50), apellido VARCHAR(50), telefono VARCHAR(12), foto blob, fk_id_rol INTEGER, FOREIGN KEY(fk_id_rol) REFERENCES rol(id_rol));";

  tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL);";
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombrep VARCHAR(30) NOT NULL, descripcion VARCHAR(100) NOT NULL, stock INTEGER NOT NULL, precio INTEGER NOT NULL, foto BLOB NOT NULL , fk_id_categoria INTEGER, FOREIGN KEY(fk_id_categoria) REFERENCES categoria(id_categoria));";


  //variables para insert por defecto
  insertRol: string = "INSERT or IGNORE INTO rol(id_rol,nombre) VALUES (1,'Cliente');";
  insertRol2: string = "INSERT or IGNORE INTO rol(id_rol,nombre) VALUES (2,'Administrador');";
  insertCategoria: string = "INSERT or IGNORE INTO categoria(id_categoria,nombre) VALUES (1,'Iphone');";
  insertCategoria2: string = "INSERT or IGNORE INTO categoria(id_categoria,nombre) VALUES (2,'Samsung');";
  insertCategoria3: string = "INSERT or IGNORE INTO categoria(id_categoria,nombre) VALUES (3,'Xiaomi');";

  //variables para los observables de las consultas a las tablas
  listaUsuarios = new BehaviorSubject([]);
  listaProductos = new BehaviorSubject([]);


  //observable para el estatus de la base de datos
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController, private router: Router) {
    this.crearBD();
  }

  //funciones que retornen los observables creados
  dbState(){
    return this.isDBReady.asObservable();
  }

  fetchUsuarios(): Observable<Usuarios[]>{
    return this.listaUsuarios.asObservable();
  }

  fetchProductos(): Observable<Productos[]>{
    return this.listaProductos.asObservable();
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
        name: 'usuariostest3.db',
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
      await this.conexionBD.executeSql(this.tablaCategoria,[]);
      //this.presentAlert("3");
      await this.conexionBD.executeSql(this.tablaProducto,[]);
      //this.presentAlert("4");

      //ejecuto los insert en las tablas
      await this.conexionBD.executeSql(this.insertRol,[]);
      //this.presentAlert("5");
      await this.conexionBD.executeSql(this.insertRol2,[]);
      //this.presentAlert("6");
      await this.conexionBD.executeSql(this.insertCategoria,[]);
      //this.presentAlert("7");
      await this.conexionBD.executeSql(this.insertCategoria2,[]);
      //this.presentAlert("8");
      await this.conexionBD.executeSql(this.insertCategoria3,[]);
      //this.presentAlert("9");   

      //this.buscarUsuarios();
      //this.presentAlert("10");

      this.buscarProductos();
      //this.presentAlert("11");
      //actualizo el observable de la base de datos
      this.isDBReady.next(true);
      //this.presentAlert("12");
    }
    catch (e) {
      this.presentAlert("Error en tablas: " + JSON.stringify(e));
    }

  }



  IniciarSesion(correo: string, clave: string){
    return this.conexionBD.executeSql('SELECT id_usuario FROM usuario WHERE correo = ? AND clave = ?', [correo,clave]).then(res=>{
      if(res.rows.length > 0){
        this.presentAlert("Bienvenido usuario");
        let idUsuario = res.rows.item(0).id_usuario;
        this.usuarioAutenticadoSubject.next(true);
        
        let n: NavigationExtras ={
          state: {
            idEnviado: res.rows.item(0).id_usuario
          }
        }
        this.router.navigate(['/home'], n);
      }else{
        this.presentAlert("Usuario y/o Contraseña incorrecto");
      }
    }).catch(e=>{
      this.presentAlert("Error en inicio sesion: " + JSON.stringify(e));
    })

  }

  CerrarSesion() {
    this.usuarioAutenticadoSubject.next(false); // Emitir false al observable
    // Puedes realizar otras tareas de limpieza aquí si es necesario
  }

  buscarUsuarios(){
    //mandar a ejecutar la sentencia sql
    return this.conexionBD.executeSql('SELECT * FROM usuariou INNER JOIN rol ON usuario.fk_id_rol = rol.id_rol',[]).then(res=>{
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
            nombreu: res.rows.item(i).nombreu,
            apellido: res.rows.item(i).apellido,
            telefono: res.rows.item(i).telefono,
            foto: res.rows.item(i).foto,
            fk_id_rol: res.rows.item(i).fk_id_rol,
            id_rol: res.rows.item(i).id_rol,
            nombre: res.rows.item(i).nombre
          })
        }
      }
      //actualizar el observable
      this.listaUsuarios.next(items as any);

    }).catch(e=>{
      this.presentAlert("Error en select join de la tabla usuario: " + JSON.stringify(e));
    })
  }

  buscarProductos(){
    return this.conexionBD.executeSql('SELECT * FROM producto INNER JOIN categoria ON producto.fk_id_categoria = categoria.id_categoria',[]).then(res=>{
      let items: Productos[] = [];
      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            id_producto: res.rows.item(i).id_producto,
            nombrep: res.rows.item(i).nombrep,
            descripcion: res.rows.item(i).descripcion,
            stock: res.rows.item(i).stock,
            precio: res.rows.item(i).precio,
            foto: res.rows.item(i).foto,
            fk_id_categoria: res.rows.item(i).fk_id_categoria,
            id_categoria: res.rows.item(i).id_categoria,
            nombre: res.rows.item(i).nombre
          })
        }
      }
      this.listaProductos.next(items as any);

    }).catch(e=>{
      this.presentAlert("Error en select join de la tabla producto: " + JSON.stringify(e));
    })
  }

 
  insertarUsuario(nombre:string, apellido: string, correo:string, telefono:string, clave:string, foto: any,fk_id_rol:number){
    //ejecutamos el insert
    return this.conexionBD.executeSql('INSERT INTO usuario(nombre, apellido, correo, telefono, clave, foto, fk_id_rol) VALUES (?,?,?,?,?,?,?)',[nombre, apellido, correo, telefono, clave, foto, fk_id_rol]).then(res=>{
      //this.buscarUsuarios();
      this.presentAlert("Usuario Registrado!");
      this.router.navigate(['/login']);
    }).catch(e=>{
      this.presentAlert("Error en insert usuario: " + JSON.stringify(e));
    })

  }

  insertarProducto(nombrep:string,descripcion:string,stock:number,precio:number,foto:any,fk_id_categoria:number){
    return this.conexionBD.executeSql('INSERT INTO producto(nombrep,descripcion,stock,precio,foto,fk_id_categoria) VALUES (?,?,?,?,?,?)',[nombrep,descripcion,stock,precio,foto,fk_id_categoria]).then(res=>{
      this.buscarProductos();
      this.presentAlert("Producto Agregado!");
    }).catch(e=>{
      this.presentAlert("Error en insert Producto: " + JSON.stringify(e));
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

  eliminarProducto(id_producto:number){
    return this.conexionBD.executeSql('DELETE FROM producto WHERE id_producto = ?',[id_producto]).then(res=>{
      this.buscarProductos();
      this.presentAlert("Producto Eliminado!");
    }).catch(e=>{
      this.presentAlert("Error en delete producto: " + JSON.stringify(e));
    })
  }

  modificarUsuario(id_usuario:number,correo:string,clave:string,fk_id_rol:number){
    //ejecutar el update
    return this.conexionBD.executeSql('UPDATE usuario SET correo = ?, clave = ?, fk_id_rol = ? WHERE id_usuario = ?',[correo,clave,fk_id_rol,id_usuario]).then(res=>{
      this.buscarUsuarios();
      this.presentAlert("Usuario Modificado");
    }).catch(e=>{
      this.presentAlert("Error en modificar usuario: " + JSON.stringify(e));
    })
  }

  modificarProducto(id_producto:number,nombrep:string,descripcion:string,stock:number,precio:number,foto:any,fk_id_categoria:number){
    return this.conexionBD.executeSql('UPDATE producto SET nombrep = ?, descripcion = ?, stock = ?, precio = ?, foto = ?, fk_id_categoria = ? WHERE id_producto = ?',[nombrep,descripcion,stock,precio,foto,fk_id_categoria,id_producto]).then(res=>{
      this.buscarProductos();
      this.presentAlert("Producto Modificado!");
    }).catch(e=>{
      this.presentAlert("Error en modificar producto: " + JSON.stringify(e));
    })

  }
}
