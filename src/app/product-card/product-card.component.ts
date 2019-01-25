import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  
  @Input('product') product:Product;
  @Input('show-actions') showActions=true;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartService:ShoppingCartService) { }

  addToCart(){
    this.shoppingCartService.addToCart(this.product);
  }

  removeFromCart(){
    this.shoppingCartService.removeFromCart(this.product);
  }
  getQuantity(){

      
      if(!this.shoppingCart) return 0;
     
      if(this.shoppingCart){const item = this.shoppingCart[this.product.key];
      return item ? item.payload.val().quantity:0}

  }



}
