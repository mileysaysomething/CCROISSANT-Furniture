import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy{ 
  shipping = {}; 
  cart:ShoppingCart;
  cartSubscription:Subscription;
  userId:string;
  userSubscription:Subscription; 
  constructor(
    private authService:AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService:OrderService) {}

  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);

    this.authService.user$.subscribe(user => this.userId = user.uid)
  }
  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  placeOrder() {
    let order =  new Order(this.userId, this.shipping, this.cart);
    this.orderService.storeOrder(order);
  
  /*  let order = {
      userId:this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(item => {
        return{
          product:{
            title: item.title,
            imageUrl: item.imageUrl,
            price: item.price
          },
          quantity:item.quantity,
          totalPrice: item.totalPrice,
        }
      }) 
    }; */
    
  }    
}
