import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart{
    items:ShoppingCartItem[]=[]; //assign when use push()

    constructor (public itemsMap:{[productId: string]:ShoppingCartItem}){ 
      for(let productId in itemsMap){
          let item =  this.itemsMap[productId];
          //this.items.push(itemsMap[productId]);
          this.items.push(new ShoppingCartItem(item.product, item.quantity))
      }
    
    } 
    getQuantity(product:Product){
       
        const item = this.itemsMap[product.key];
        return item ? item.quantity:0;
  
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

    get totalPrice(){

        let sum=0;
        for( let productId in this.items){
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }
}