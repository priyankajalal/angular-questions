import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from "../services/product.service";
import {IProduct, IProductDetails} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: IProductDetails;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>this.loadProduct(params['id']) )
  }

  loadProduct(id: number) {
    if(id){
      this.productService.getProduct_Ob(id).subscribe(res => this.product = res);
    }
  }

  backToProducts() {
    this.router.navigate(['/products'])
  }

}
