import { Injectable } from '@angular/core';
import { IProduct } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productList: IProduct[]= [
       {"name":"watch", "id":1, "price":256, "description": "Apple Watch Series 1- 38mm Stainless Steel Case with RED Sport Band."},
       {"name":"belt", "id":2, "price":50, "description":"Russet Pioneer Leather buckle belt crafted from genuine leather."},
       {"name":"shoes", "id":1, "price":200, "description": "Jumpman Basketball Shoes for Women Men Fashion Orange Designer Sports Sneakers."},
    ];

  getProducts(){
    return this.productList;
  }

}
