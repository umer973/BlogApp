import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() selectTedRoute = new EventEmitter();
  @Input() loggedUser: any;


  constructor(private router: Router) { }

  ngOnInit() {

  }
  addBlog() {
    this.router.navigate(['layout/add-blogs'],{ queryParams: { 'Id': null } });
  }
  showBlogs() {
    this.router.navigate(['layout/blog-list']);
  }

}
