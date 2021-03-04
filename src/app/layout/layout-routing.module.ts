import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddBlogsComponent } from '../Blog/add-blogs/add-blogs.component';
import { BlogListComponent } from '../Blog/blog-list/blog-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path: 'mainpage',
    component: LayoutComponent
  },
  {path:'blog-list',component:AddBlogsComponent},
  {path:'add-blogs',component:BlogListComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
