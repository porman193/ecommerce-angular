import { Product } from '@models/product/product.model';
import { Component, input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLinkWithHref, NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  readonly product = input.required<Product>();

  readonly addToCard = output<Product>();

  addToCardHandler() {
    this.addToCard.emit(this.product());
  }
}
