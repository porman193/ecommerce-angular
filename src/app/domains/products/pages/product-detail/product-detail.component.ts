import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  private productService = inject(ProductService)
  private cartService = inject(CartService)
  product = signal<Product|null>(null)
  @Input() id?:string;

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next:(product) => {
          this.product.set(product);
        }
      });
    }
  }

  addToCard(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product)
    }
  }

}
