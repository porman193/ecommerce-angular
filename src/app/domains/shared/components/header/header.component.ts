import { Component, inject, signal } from '@angular/core';
import { CartService } from '@services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideMenu = signal(true);

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.totalPrice;

  toogleHideMenu() {
    this.hideMenu.update((hideMenu) => !hideMenu);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }
}
