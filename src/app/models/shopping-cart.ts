import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
    items:ShoppingCartItem[]=[]; //assign when use push()

    constructor (public itemsMap:{[productId: string]:ShoppingCartItem}){ 
      for(let productId in itemsMap){
          this.items.push(itemsMap[productId]);
      }
    
    } 

   // get productIds(){
     // return Object.keys(this.itemsMap);
    //}

    get totalItemsCount(){
        let count = 0;
      for(let productId in this.itemsMap){
        count += this.itemsMap[productId].quantity;
      }
      return count;
    }
}