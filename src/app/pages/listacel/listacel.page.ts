import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacel',
  templateUrl: './listacel.page.html',
  styleUrls: ['./listacel.page.scss'],
})
export class ListacelPage implements OnInit {

  listaIphone: any = [
    {
      id:  1,
      modelo:  "Iphone 12 pro",
      memoria: "128 GB",
      precio: 927790,
      stock: 5,
      id2:  2,
      modelo2:  "Iphone 13 pro",
      memoria2: "128 GB",
      precio2: 989690,
      stock2: 10,
      id3:  3,
      modelo3:  "Iphone 14 plus",
      memoria3: "128 GB",
      precio3: 1099990,
      stock3: 15
    },
  ]

  /*No pude hacerlo de esa forma, porque deformaba el diseno
  
  listaIphone: any = [
    {
      id:  1,
      modelo:  "Iphone 12 pro",
      memoria: "128 GB",
      precio: 927790,
      stock: 5
    },
    {
      id:  2,
      modelo:  "Iphone 12 pro",
      memoria: "128 GB",
      precio: 2222,
      stock: 10
    },
    {
      nombre: "Maria",
      edad: 29
    }
  ]*/

  constructor() { }

  ngOnInit() {
  }

}
