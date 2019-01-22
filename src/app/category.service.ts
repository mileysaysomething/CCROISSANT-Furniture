import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
   /*
    return this.db.list('/categories',{
      query: {
        orderByChild:'name'
      }
    });
    */
   return this.db
      .list('/categories', ref => ref.orderByChild('name'))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() }),))
      );

  }
}
