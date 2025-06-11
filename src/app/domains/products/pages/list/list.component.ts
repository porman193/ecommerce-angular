import { CartService } from './../../../shared/service/cart.service';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product/product.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  products= signal<Product[]>([])
  private cartService= inject(CartService)

  constructor(){
    for (let i = 1; i <= 15; i++) {
      const newProduct: Product = {
        id: i,
        title: `Producto ${i}`,
        price: Math.floor(Math.random() * 100) + 1, // precio aleatorio entre 1 y 100
        imgUrl: 'https://picsum.photos/400/300?r=' + Math.random()
      };
      this.products.update(current => [...current, newProduct]);
    }
  }

  addProductFromChild(product:Product){
    this.cartService.addToCart(product)
  }


}
