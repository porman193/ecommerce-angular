import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required:true}) imgUrl :string ='';
  @Input({required:true}) price :number =0;
  @Input({required:true}) title :string ='';


}
