import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsGetResponse } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductsGetResponse;

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe(products => this.products = products)
  }
}
