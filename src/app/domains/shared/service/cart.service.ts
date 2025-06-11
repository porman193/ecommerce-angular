import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product/product.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  totalPrice = computed(()=>
    this.cart().reduce((acc,item)=>acc+item.price,0)
  );
  constructor() { }

  addToCart(product:Product){
    this.cart.update(prevCart => [...prevCart,product])
    console.log(this.cart().length)
  }

  removeFromCart(index:number){
    this.cart.update(
      items => items.filter(
        (item,position) => position !== index
      )
    )
  }


}
