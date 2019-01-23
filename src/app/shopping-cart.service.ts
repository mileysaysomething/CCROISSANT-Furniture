import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';

import { map, take } from 'rxjs/operators';
//import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private  db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      createdDate: new Date().getTime()
    });
  }

  private getCart(cartId:string){
    return this.db.object('/shopping-carts' + cartId);
  }

  private getItem(cartId:string, productId:string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }
  private async getOrCreateCartId(){

    let cartId = localStorage.getItem('cartId');
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

  async addToCart (product:Product){
    const cartId = await this.getOrCreateCartId();

    const item = this.getItem(cartId, product.key);

    item.snapshotChanges().pipe(take(1)).subscribe((i: any) => {
    console.log(i);
    // If item.quanity not exist, won't show a number
   // item.update({product:product, quantity:((i.payload.val().quantity) || 0) + 1});
   if (i.payload.val()) { item.update({
       product:product, quantity: i.payload.val().quantity + 1 });
      } else {item.set({ product:product, quantity: 1 }); } 

    });
  }
}
