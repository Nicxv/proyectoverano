import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  apiURL = "https://jsonplaceholder.typicode.com/";


  constructor(private http:HttpClient) { }


  obtenerUsuarios(): Observable<any>{
    return this.http.get(this.apiURL + 'users').pipe(
      retry(3)
    );
  }

  
}
