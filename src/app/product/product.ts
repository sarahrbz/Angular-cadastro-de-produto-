import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  formGroupProduct: FormGroup;
   products: Product[] = [];

  constructor(private formBuilder: FormBuilder) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: ['']
    });

  }

  save() {
    this.products.push(this.formGroupProduct.value);
    this.formGroupProduct.reset();
  }

}
