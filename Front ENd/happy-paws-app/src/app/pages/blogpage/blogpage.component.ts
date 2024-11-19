import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-blogpage',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './blogpage.component.html',
  styleUrl: './blogpage.component.css'
})
export class BlogpageComponent {
  public blogList: any = [];
  healthlist: any[] = [];
  trainlist: any[] = [];
  nutrilist: any[] = [];
  groominglist: any[] = [];
  lifelist: any[] = [];

  constructor(private http: HttpClient) {
    this.loadBlogs();
  }

  loadBlogs() {
    this.healthlist = [];
    this.nutrilist = [];
    this.groominglist = [];
    this.trainlist = [];
    this.lifelist = [];
    this.http.get<any[]>('http://localhost:8080/blog/get-all').subscribe(
      (response) => {
        console.log(response);
        
        response.forEach(blog => {
          this.blogList.push(blog);
          switch (blog.category) {
            case "Health":
              this.healthlist.push(blog);
              break;
            case "Training":
              this.trainlist.push(blog);
              break;
            case "Nutrition":
              this.nutrilist.push(blog);
              break;
            case "Grooming":
              this.groominglist.push(blog);
              break;
            default:
              this.lifelist.push(blog);
              break;
          }
          
          
        });
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
