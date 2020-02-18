import {Injectable} from '@angular/core';
import {IProduct, IProductDetails} from "../models/product";
import {from, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  productList = [
    {
      "name": "watch",
      "id": 1,
      "price": 256,
      "description": "Apple Watch Series 1- 38mm Stainless Steel Case with RED Sport Band."
    },
    {
      "name": "belt",
      "id": 2,
      "price": 50,
      "description": "Russet Pioneer Leather buckle belt crafted from genuine leather."
    },
    {
      "name": "shoes",
      "id": 3,
      "price": 200,
      "description": "Jumpman Basketball Shoes for Women Men Fashion Orange Designer Sports Sneakers."
    },
  ];
  productDetailsList: IProductDetails[] = [
    {
      "name": "watch",
      "id": 1,
      "price": 256,
      "description": "Apple Watch Series 1- 38mm Stainless Steel Case with RED Sport Band.",
      "details": "Note I move the check for q outside. This won't run two timeouts at once, but there may be multiple in-flight requests. To guard against this, the success callback needs a guard -- and a simple way to do this is with a counter. Checking the \"current q\" with the q in the setTimeout may lead to subtle race conditions.\n" +
        "\n"
    },
    {
      "name": "belt",
      "id": 2,
      "price": 50,
      "description": "Russet Pioneer Leather buckle belt crafted from genuine leather.",
      "details": "Apple Watch Series 1- 38mm Stainless Steel Case with RED Sport Band."
    },
    {
      "name": "shoes",
      "id": 3,
      "price": 200,
      "description": "Jumpman Basketball Shoes for Women Men Fashion Orange Designer Sports Sneakers.",
      "details": "Apple Watch Series 1- 38mm Stainless Steel Case with RED Sport Band."
    },
  ];

  getProducts(): IProduct[] {
    return this.productList;
  }


  public getProducts_Ob(): Observable<IProduct> {
    const arraySource = from(this.productList);
    return arraySource
    // .pipe(
    //   map(jsonRow => Object.assign({}, jsonRow))
    // )
  }


  getProduct(id: number): IProductDetails {
    let product = this.productDetailsList.filter(product => product.id == id);
    if (product.length >= 1) {
      return product[0]
    }
  }

  getProduct_Ob(id: number): Observable<IProductDetails> {
    return from(this.productDetailsList)
      .pipe(
        filter(product => product.id == id))

  }


}
