import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 
  }

  getProducts(): any{
    return this.http.get('https://fakestoreapi.com/products');
  }

  getElectronicos(): any{
    return this.http.get('https://fakestoreapi.com/products/category/electronics');
  }

  getJoyas(): any{
    return this.http.get('https://fakestoreapi.com/products/category/jewelery');
  }

  getRopaHom(): any{
    return this.http.get("https://fakestoreapi.com/products/category/men's clothing")
  }

  getRopaMuj(): any{
    return this.http.get("https://fakestoreapi.com/products/category/women's clothing")
  }

}
