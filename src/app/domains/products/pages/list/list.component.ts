import { CommonModule } from '@angular/common';
import { ProductService } from '@services/product.service';
import { CartService } from '@services/cart.service';
import { Component, inject, input, resource } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@models/product/product.model';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  readonly slug = input<string>();

  products = rxResource({
    params: () => ({ categorySlug: this.slug() }),
    stream: ({ params }) => this.productService.getProducts(params),
  });

  categories = resource({
    loader: () => this.categoryService.getAllPromise(),
  });

  addProductFromChild(product: Product) {
    this.cartService.addToCart(product);
  }

  changeCategorySelect(id: number) {
    this.categories.update((categories) => {
      return categories?.map((category) => {
        if (id == category.id) {
          return {
            ...category,
            isSelect: true,
          };
        }
        return {
          ...category,
          isSelect: false,
        };
      });
    });
  }
}
