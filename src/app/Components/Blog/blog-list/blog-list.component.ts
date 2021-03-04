import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/Services/notification-service.service';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any;
  constructor(private blogService: BlogService,private notifyService: NotificationServiceService,private router:Router) { }

  ngOnInit() {

    this.blogs=this.blogService.getBlogs()
    console.log(this.blogs);
    
  }
  deleteBlog(id) {
    for(let i = 0; i < this.blogs.length; i++) {
      if(this.blogs[i].id == id) {
          this.blogs.splice(i, 1);
      }
    }

    this.blogService.deleteBlog(id);
    this.notifyService.showInfo("Blog deleted", '');
  }

  editBlog(id){
    this.router.navigate(['/layout/add-blogs'], { queryParams: { 'Id': id } });
  }
}
