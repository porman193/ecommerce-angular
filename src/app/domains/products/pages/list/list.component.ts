import { ProductService } from '@services/product.service';
import { CartService } from '@services/cart.service';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@models/product/product.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export default class ListComponent {

  products= signal<Product[]>([])
  private cartService= inject(CartService)
  private productService = inject(ProductService)

  ngOnInit(){
    this.productService.getProducts().subscribe(
      {
        next:(products) =>{
          this.products.set(products);
          console.log(this.products())
        },
        error:()=>{
          console.error("Error")
          console.log(this.products())
        }
      }
    );
  }

  addProductFromChild(product:Product){
    this.cartService.addToCart(product)
  }


}
