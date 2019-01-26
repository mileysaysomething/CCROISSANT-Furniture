import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Product } from './models/product';
import {take, map } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
//import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private  db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      createdDate: new Date().getTime()
    });
  }
  

  async getCart():Promise<Observable<ShoppingCart>>{
    const cartId = await this.getOrCreateCartId(); //string not a promise
    //return this.db.object('/shopping-carts' + cartId);
    return this.db
    .object('/shopping-carts/' + cartId)
    .snapshotChanges()
    .pipe(map((x: any) => new ShoppingCart(x.payload.val().items)));
  }

  private getItem(cartId:string, productId:string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId():Promise<string>{

    let cartId = localStorage.getItem('cartId');
    //localStorage.removeItem('cartId');
    if(!cartId){
      //async, the same as in C#
      let result = await this.create(); 
      localStorage.setItem('cartId',result.key);
      /*
      this.create().then(result =>{
        localStorage.setItem('cartId',result.key);}
      */
        return result.key; ///return this.getCart(result.key);
    }else{
      return cartId; //return this.getCart(cartId);
    }
  }
  async clearCart(){
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
  async addToCart (product:Product){
    this.updateItem(product, 1);
  }
  async removeFromCart(product:Product){
    this.updateItem(product, -1);
  }
  
  private async updateItem(product:Product, change:number){
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.key);

    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
    // If item.quanity not exist, won't show a number
   // item.update({product:product, quantity:((i.payload.val().quantity) || 0) + 1});
   if (item.payload.val()) { item$.update({
       //product:product,
       title:product.title,
       imageUrl:product.imageUrl,
       price:product.price,
        quantity: item.payload.val().quantity + change });
      } else {item$.set({ product:product, quantity: 1 }); } 
    });
  }

}
