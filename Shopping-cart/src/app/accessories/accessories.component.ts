import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {IProduct} from "../models/product";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {
  }

  productList: IProduct[];

  ngOnInit() {
    this.productList = [];
    this.productService.getProductList_Ob().subscribe(x => this.setProducts(x));
  }

  setProducts(x) {
    console.log(x);
    this.productList.push(x);
  }

  goToDetails(id){
    this.router.navigate(['/accessories',id]);
  }

}
