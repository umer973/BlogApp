import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/Components/dialog/dialog.service';
import { LoaderService } from 'src/app/Services/loader.service';

import { NotificationServiceService } from 'src/app/Services/notification-service.service';
import { BlogService } from 'src/app/Services/blog.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {
  myDate = new Date();
  userFormGroup: FormGroup;
  submitted = false;
  blogs: any;
  id: any;
  constructor(
    private router: Router
    , private formBuilder: FormBuilder
    , private _Activatedroute: ActivatedRoute
    , private loaderservice: LoaderService

    , private notifyService: NotificationServiceService
    , private route: ActivatedRoute
    , private blogService: BlogService
    , private datePipe: DatePipe
    

  ) { }

  ngOnInit() {
    this.CreateFormControls();
    this.blogs = this.blogService.getBlogs()

    this.id = this._Activatedroute.snapshot.queryParamMap.get('Id');
    let emps = this.blogService.getBlogs();
    this.blogs = emps.find(p => p.id == this.id);
    if (this.id != null)
      this.userFormGroup.patchValue(this.blogs)
    console.log(this.id);
  }

  get f() {
    return this.userFormGroup.controls;
  }


  CreateFormControls() {
    this.userFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],

    });

  }
  saveBlog() {
    try {
      if (this.userFormGroup.value) {
        let newBlog = {
          id: uuid(),
          title: this.userFormGroup.value.title,
          description: this.userFormGroup.value.description,
          CreatedOn:this.datePipe.transform(this.myDate, 'yyyy-MM-dd h:mm a'),
        }

        this.blogService.addBlog(newBlog);
        this.notifyService.showSuccess("Blog Created", '');
        this.router.navigate(['layout/blog-list']);

      }
    }
    catch (err) {
      this.notifyService.showError(err, '');
    }
  }
  updateBlog() {
    try {
      if (this.userFormGroup.value) {

        this.blogService.updateBlog(this.blogs, this.userFormGroup.value);;
        this.notifyService.showSuccess("Blog updated", '');
        this.router.navigate(['layout/blog-list']);
        this.id = null;

      }
    }
    catch (err) {
      this.notifyService.showError(err, '');
    }
  }
  onSubmit() {
    if (this.id == null || this.id == undefined) {
      this.saveBlog();
    }
    else {
      this.updateBlog();
    }

  }

}
