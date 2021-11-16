import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutWithSharedComponent} from './layout/layout-with-shared/layout-with-shared.component';
import {HomepageComponent} from './user/homepage/homepage.component';
import {ShopComponent} from './user/shop/shop.component';
import {ContactComponent} from './user/contact/contact.component';
import {ProductDetailComponent} from './user/product-detail/product-detail.component';
import {CategoryDetailComponent} from './user/category-detail/category-detail.component';
import {FavoriteComponent} from './user/favorite/favorite.component';
import {AuthGuard} from './helper/auth-guard';
import {Login1Component} from './auth/login1/login1.component';
import {Register1Component} from './auth/register1/register1.component';
import {ResetpassComponent} from './auth/resetpass/resetpass.component';


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutWithSharedComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'chart',
        pathMatch: 'full'
      },
      {
        path: 'document',
        loadChildren: () => import('./administrator/product/product.module').then(module => module.ProductModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./administrator/category/category.module').then(module => module.CategoryModule)
      },
      {
        path: 'topic',
        loadChildren: () => import('./administrator/topic/topic.module').then(module => module.TopicModule)
      },
      {
        path: 'reader',
        loadChildren: () => import('./administrator/reader/reader.module').then(module => module.ReaderModule)
      },
      {
        path: 'publishing-company',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('./administrator/publishing-company/publishing-company.module').then(module => module.PublishingCompanyModule)
      }, {
        path: 'author',
        loadChildren: () => import('./administrator/author/author.module').then(module => module.AuthorModule)
      }, {
        path: 'chart',
        loadChildren: () => import('./administrator/chart/chart.module').then(module => module.ChartModule)
      }
    ],
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'document',
    component: ShopComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'document/:id',
    component: ProductDetailComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'category/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'login',
    component: Login1Component
  }, {
    path: 'resetpassword',
    component: ResetpassComponent
  },
  {
    path: 'register',
    component: Register1Component
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
