import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './Services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http'




import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './Components/loader/loader.component';

import { ToastrModule } from 'ngx-toastr';
import { AddBlogsComponent } from './Components/Blog/add-blogs/add-blogs.component';
import { BlogListComponent } from './Components/Blog/blog-list/blog-list.component';
import { LayoutModule } from './Components/layout/layout.module';
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
