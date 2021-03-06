import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';
import { AppComponent } from './app.component';
//import { environment } from 'src/environments/environment.prod';
// Angular-CLI will choose the right environment
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                BsNavbarComponent,
                HomeComponent,
                ProductsComponent,
                LoginComponent,
                ShoppingCartComponent,
                CheckOutComponent,
                OrderSuccessComponent,
                MyOrdersComponent,
                AdminProductsComponent,
                AdminOrdersComponent,
                ProductFormComponent,
                ProductFilterComponent,
                ProductCardComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                CustomFormsModule,
                DataTableModule,
                // init AngularFire
                AngularFireModule.initializeApp(environment.firebase),
                AngularFireDatabaseModule,
                AngularFireAuthModule,
                NgbModule.forRoot(),
                RouterModule.forRoot([
                    { path: '', component: ProductsComponent },
                    { path: 'products', component: ProductsComponent },
                    { path: 'shopping-cart', component: ShoppingCartComponent },
                    { path: 'login', component: LoginComponent },
                    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
                    { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
                    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
                    //Most specificate on top
                    {
                        path: 'admin/products/new',
                        component: ProductFormComponent,
                        canActivate: [AuthGuard, AdminAuthGuard]
                    },
                    {
                        path: 'admin/products/:id',
                        component: ProductFormComponent,
                        canActivate: [AuthGuard, AdminAuthGuard]
                    },
                    {
                        path: 'admin/products',
                        component: AdminProductsComponent,
                        canActivate: [AuthGuard, AdminAuthGuard]
                    },
                    {
                        path: 'admin/orders',
                        component: AdminOrdersComponent,
                        canActivate: [AuthGuard, AdminAuthGuard]
                    },
                ])
            ],
            providers: [
                AuthService,
                AuthGuard,
                UserService,
                AdminAuthGuard,
                CategoryService,
                ProductService,
                ShoppingCartService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map