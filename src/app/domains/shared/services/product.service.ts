import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    http = inject(HttpClient);

    getProducts(categoryId?:string){
      let url = new URL('https://api.escuelajs.co/api/v1/products');
      if(categoryId){
        url.searchParams.set('categoryId',categoryId)
      }
      return this.http.get<Product[]>(url.toString())
    }



    getOne(id:string){
      return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
    }
}
