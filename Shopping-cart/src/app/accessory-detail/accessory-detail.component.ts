import { Component, OnInit } from '@angular/core';
import {IProductDetails} from "../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-accessory-detail',
  templateUrl: './accessory-detail.component.html',
  styleUrls: ['./accessory-detail.component.css']
})
export class AccessoryDetailComponent implements OnInit {

  product: IProductDetails;

  constructor(private router:Router,private route:ActivatedRoute,private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadProduct(params['id']));
  }

  loadProduct(id: number) {
    if(id){
      this.productService.getProduct_Ob(id).subscribe(res => this.product = res);
    }
  }

  // backToProduct(){
  //   this.router.navigate('/accessories');
  // }

}
