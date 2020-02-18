import { Component, OnInit } from '@angular/core';
import { ProductService } from '.././services/product.service';
import {IProduct} from "../models/product";
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router) { }

  productList:IProduct[];

  ngOnInit() {
    this.productList = this.productService.getProducts();
    console.log(this.productList);
  }

  navigateProduct(id) {
    this.router.navigate(['/products/', id])
  }

}
