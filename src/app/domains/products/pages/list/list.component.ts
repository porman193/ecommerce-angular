import { CommonModule } from '@angular/common';
import { ProductService } from '@services/product.service';
import { CartService } from '@services/cart.service';
import {
  Component,
  inject,
  Input,
  signal,
  OnInit,
  OnChanges,
} from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@models/product/product.model';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent implements OnInit, OnChanges {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  @Input() slug?: string;

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnChanges() {
    this.getProducts();
  }

  addProductFromChild(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts({ categorySlug: this.slug }).subscribe({
      next: (products) => {
        this.products.set(products);
        console.log(this.products());
      },
      error: () => {
        console.error('Error');
        console.log(this.products());
      },
    });
  }

  changeCategorySelect(id: number) {
    this.categories.update((categories) => {
      return categories.map((category) => {
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
