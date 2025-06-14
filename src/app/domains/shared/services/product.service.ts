import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getProducts(params: { categoryId?: string; categorySlug?: string }) {
    const url = new URL(`${environment.apiUrl}/api/v1/products`);
    if (params.categoryId) {
      url.searchParams.set('categoryId', params.categoryId);
    }
    if (params.categorySlug) {
      url.searchParams.set('categorySlug', params.categorySlug);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(params: { slug?: string; id?: string }) {
    let url = `${environment.apiUrl}/api/v1/products`;
    if (params.slug) {
      url = url + `/slug/${params.slug}`;
    }
    if (params.id) {
      url = url + `/${params.id}`;
    }
    return this.http.get<Product>(url);
  }
}
