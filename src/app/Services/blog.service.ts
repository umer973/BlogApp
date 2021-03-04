
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root',
})

export class BlogService {
    myDate = new Date();
    constructor(private datePipe: DatePipe) {
        

        this.load();
    }

    getBlogs() {
        let blg = JSON.parse(localStorage.getItem('blogs'));
        return blg;
    }

    addBlog(newBlog) {
        let emps = JSON.parse(localStorage.getItem('blogs'));
        emps.push(newBlog);
        localStorage.setItem('blogs', JSON.stringify(emps));
    }

    deleteBlog(id) {
        let emps = JSON.parse(localStorage.getItem('blogs'));
        for (let i = 0; i < emps.length; i++) {
            if (emps[i].id == id) {
                emps.splice(i, 1);
            }
        }
        localStorage.setItem('blogs', JSON.stringify(emps));
    }

    updateBlog(oldBlog, newBlog) {
        let blgs = JSON.parse(localStorage.getItem('blogs'));

        for (let i = 0; i < blgs.length; i++) {
            if (blgs[i].id == oldBlog.id) {
                blgs[i] = newBlog;
            }
        }
        localStorage.setItem('blogs', JSON.stringify(blgs));
    }

    load() {
        if(localStorage.getItem('blogs') === null || localStorage.getItem('blogs') == undefined) {
         
          let blgs = [
            {
              id:1,
              title:'Daily Dose',
              description:'Psasdsasaasdsasnsadsdsdsadsaddadigrahi',
              CreatedOn:this.datePipe.transform(this.myDate, 'yyyy-MM-dd h:mm a'),
             
            }, 
            {
              id:2,
              title:'Digital Dialogue.',
              description:'ssdsadsassad',
              CreatedOn:this.datePipe.transform(this.myDate, 'yyyy-MM-dd h:mm a'),
            }, {
              id:3,
              title:'Writing Room',
              description:'saddsassasadsad',
              CreatedOn:this.datePipe.transform(this.myDate, 'yyyy-MM-dd h:mm a'),
            },
          ];
    
          localStorage.setItem('blogs', JSON.stringify(blgs));
          return 
        } else {
         
        }
      }
}