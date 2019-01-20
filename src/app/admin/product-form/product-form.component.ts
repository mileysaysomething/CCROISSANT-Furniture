import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
 //only can take one element, auto un-subsribe
import 'rxjs/add/operator/take'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product={};
  id;
  //only use this in constructors
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private categoryService:CategoryService, 
    private productService:ProductService) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).valueChanges().subscribe(p => this.product = p);
    //use valueChanges() instead of take();

    this.id = this.route.snapshot.paramMap.get('id');
    }

   save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
   }
  ngOnInit() {
  }

}
