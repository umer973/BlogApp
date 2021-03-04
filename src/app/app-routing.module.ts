import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { LayoutComponent } from './Components/layout/layout/layout.component';

import { AuthGuardService } from './Services/auth-guard.service';

import { AddBlogsComponent } from './Components/Blog/add-blogs/add-blogs.component';
import { BlogListComponent } from './Components/Blog/blog-list/blog-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout', component: LayoutComponent,
    canActivateChild:[AuthGuardService],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },   
      {path:'add-blogs',component:AddBlogsComponent},
      {path:'blog-list',component:BlogListComponent}
    ]
  },
  
  {
    path: 'layout',
    loadChildren: () => import('./Components/layout/layout.module').then(mod => mod.LayoutModule)
  },
];
@NgModule({
  // declarations: [MoredetailsComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
