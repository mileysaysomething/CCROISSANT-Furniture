import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  //only use this in constructors
  constructor(categoryService:CategoryService) {
    this.categories$ = categoryService.getCategories();
   }

  ngOnInit() {
  }

}
