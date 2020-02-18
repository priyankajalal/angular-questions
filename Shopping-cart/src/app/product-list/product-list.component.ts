import { Component, OnInit } from '@angular/core';
import { ProductService } from '.././services/product.service';
import {IProduct} from "../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productList:IProduct[];

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

}
