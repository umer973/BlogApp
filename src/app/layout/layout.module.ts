import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

 import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoaderComponent } from '../loader/loader.component';

import { AddBlogsComponent } from '../Blog/add-blogs/add-blogs.component';
import { BlogListComponent } from '../Blog/blog-list/blog-list.component';
// import { ErrorComponent } from '../error/error.component';
// import { AddProductComponent } from '../Project/IGMC/add-product/add-product.component';
// import { AddBrandComponent } from '../Project/IGMC/add-brand/add-brand.component';
// import { AddHSNComponent } from '../Project/IGMC/add-hsn/add-hsn.component';
// import { AddCategoryComponent } from '../Project/IGMC/add-category/add-category.component';
// import { AddDealerComponent } from '../Project/IGMC/add-dealer/add-dealer.component';

@NgModule({
  declarations: [LayoutComponent,HeaderComponent,
    FooterComponent,SidebarComponent,DashboardComponent
   
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[]
})
export class LayoutModule { }
