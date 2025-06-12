import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    http = inject(HttpClient);

    getProducts(){
      return this.http.get<Product[]>('https://fakestoreapi.com/products');
    }

    getOne(id:string){
      return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
    }
}
