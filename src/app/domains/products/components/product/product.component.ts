import { Product } from './../../../shared/models/product/product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required:true}) product! :Product;


  @Output() addToCard = new EventEmitter();

  addToCardHandler(){
    this.addToCard.emit(this.product)
  }


}
