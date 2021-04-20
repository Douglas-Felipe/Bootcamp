import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: Product[];

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.getProductsHighlights();
  }

  getProductsHighlights(): void {
    this.productsService.getProductsHighlights().subscribe(products => this.products = products)
  }

}
