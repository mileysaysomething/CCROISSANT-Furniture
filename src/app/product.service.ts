import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }
  getAll() {
    return this.db.list('/products')
    .snapshotChanges()
    .pipe
    (
    map(changes => {
      return changes.map(c => ({ 
        key: c.key,
        title: c.payload.val()['title'],
        price: c.payload.val()['price'],
        category: c.payload.val()['category'],
        imageUrl: c.payload.val()['imageUrl']
      }));
    })
    );
     
  }

  get(productId){
    return this.db.object('/products/'+ productId);
  }
  update(productId, product){
    return this.db.object('/products/'+ productId).update(product);
  }
  delete(productId){
    return this.db.object('/products/'+ productId).remove();
  }
}
 