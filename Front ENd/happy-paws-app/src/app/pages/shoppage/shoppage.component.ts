import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shoppage',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']  // Fixed typo: "styleUrl" to "styleUrls"
})
export class ShoppageComponent {
  public productList: any = [];
  toylist: any[] = [];
  foodlist: any[] = [];
  shampoolist: any[] = [];
  accessorylist: any[] = [];
  otherlist: any[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    // Reset lists before fetching new products
    this.toylist = [];
    this.foodlist = [];
    this.shampoolist = [];
    this.accessorylist = [];
    this.otherlist = [];

    this.http.get<any[]>('http://localhost:8080/product/get-all').subscribe(
      (response) => {
        response.forEach(product => {
          switch (product.category) {
            case "Toy":
              this.toylist.push(product);
              break;
            case "Food":
              this.foodlist.push(product);
              break;
            case "Shampoo":
              this.shampoolist.push(product);
              break;
            case "Accessory":
              this.accessorylist.push(product);
              break;
            default:
              this.otherlist.push(product);
              break;
          }
        });
      },
      (error) => {
        console.error("Error fetching Products:", error);
      }
    );
  }
}
