import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  filteredProducts:Product[]=[];
  category:string;
  cart$:Observable<ShoppingCart>;
  subscription:Subscription;

  // Construcor in TypeScript cannot be async
  constructor( 
    private route: ActivatedRoute,
    private productService : ProductService,
    private shoppingCartService : ShoppingCartService) 
    { 
    
  }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
   
    }
    private populateProducts(){

      this.productService
        .getAll()
        .switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
          }).subscribe(
            params => {
            this.category = params.get('category');
  
            this.applyFilter();
        }
      );
    }

    private applyFilter(){
       //If no category selected, return all products
       this.filteredProducts = (this.category)?
       this.products.filter(p => p.category === this.category):
       this.products;

    }

   
}
