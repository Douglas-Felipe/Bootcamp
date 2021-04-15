import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productsService.getProduct(id).subscribe(product => this.product = product)
  }
}
