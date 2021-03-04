import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http'




import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';

import { ToastrModule } from 'ngx-toastr';
import { AddBlogsComponent } from './Blog/add-blogs/add-blogs.component';
import { BlogListComponent } from './Blog/blog-list/blog-list.component';
import { LayoutModule } from './layout/layout.module';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    AddBlogsComponent,
    BlogListComponent,
    
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,  
    
  ],
  exports:[],
  providers: [AuthGuardService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
