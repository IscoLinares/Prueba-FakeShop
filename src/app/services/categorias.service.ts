import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { 
    console.log('Servicio Categorias')
  }

  getCategories(): any{
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
}
