import { Component, computed, inject, Injectable, Input, Signal, signal } from '@angular/core';
import { Product } from '../../models/product/product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  hideMenu = signal(true);

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.totalPrice;

  toogleHideMenu(){
    this.hideMenu.update(hideMenu => !hideMenu);
  }

  removeFromCart(index:number){
    this.cartService.removeFromCart(index);
  }
}
