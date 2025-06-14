import { Component, inject, Input, signal, OnInit } from '@angular/core';
import { Product } from '@shared/models/product/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal<string>('');

  @Input() slug?: string;

  ngOnInit() {
    if (this.slug) {
      this.productService.getOne({ slug: this.slug }).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
            console.log(product.images);
          }
        },
      });
    }
  }

  addToCard() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
