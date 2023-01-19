import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 
    console.log('Servicio Categorias')
  }

  getProducts(): any{
    return this.http.get('https://fakestoreapi.com/products');
  }
}
