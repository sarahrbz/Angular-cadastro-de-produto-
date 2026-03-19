import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit {
  formGroupProduct: FormGroup;

  products = signal<Product[]>([]);


  constructor(private formBuilder: FormBuilder, private service: ProductService) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: ['']
    });

  }
  ngOnInit(): void {
     this.service.getAllProducts().subscribe(
          {
              next: json => this.products.set(json)
          }
      );
  }

  save() {
   this.service.save(this.formGroupProduct.value).subscribe(
     {
       next: json => {
          this.products.update(products => [...products, json]);
          this.formGroupProduct.reset();
       }
     }
    );
  }

}
