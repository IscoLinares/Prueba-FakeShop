import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './services/categorias.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FakeStore';
  categoriesList: any = [];
  productsList: any = [];

  constructor(private CategoriasService: CategoriasService,
              private ProductosService: ProductosService){
    console.log('creacion');
  }

  ngOnInit():void{
    console.log('inicio');
    this.CategoriasService.getCategories()
      .subscribe((rescat: any) => this.categoriesList = rescat);

      this.ProductosService.getProducts()
      .subscribe((resprod: any) => this.productsList = resprod);
    
    }
}
