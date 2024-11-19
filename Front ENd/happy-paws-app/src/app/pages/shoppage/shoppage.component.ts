import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-shoppage',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent {

  public productList: any = [];
  toylist: any[] = [];
  foodlist: any[] = [];
  shampoolist: any[] = [];
  accessorylist: any[] = [];
  otherlist: any[] = [];
  carrtlist: any[] = [];
  subTotal: number = 0;
  deliveryCharge: number = 300;
  total: number = 0;
  userData = {
    email: localStorage.getItem('email'),
    username: localStorage.getItem('username'),
    name: localStorage.getItem('name'),
    petName: localStorage.getItem('pet_name'),
    address: localStorage.getItem('address'),
  };
  
  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  parseInt(arg0: string): number {
    const parsedNumber = Number.parseInt(arg0, 10); // Base 10 parsing
    if (isNaN(parsedNumber)) {
      throw new Error(`Unable to parse "${arg0}" as an integer.`);
    }
    return parsedNumber;
  }
  removeFromCart(_t19: any) {
    this.carrtlist.splice(this.carrtlist.indexOf(_t19), 1);
    this.subTotal -= _t19.price * _t19.quantity;
    this.total = this.subTotal + this.deliveryCharge;
  }
  placeOrder() {
    if (!this.carrtlist || this.carrtlist.length === 0) {
      alert("Cart is empty. Please add items to the cart before placing an order.");
      return;
    }
    console.log(this.carrtlist);
    
    const pdf = new jsPDF();
    const logoBase64 = 'Logo.png';
    pdf.addImage(logoBase64, 'PNG', 10, 10, 20, 20); // x=10, y=10, width=30, height=30

    // Header
    pdf.setFontSize(28);
    pdf.setTextColor(165, 42, 42);
    pdf.setFont("helvetica", "bold");
    pdf.text("HappyPaws Store", 60, 20);
    pdf.setFontSize(14);
    pdf.setTextColor(160, 42, 42);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Order Receipt`, 10, 40);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, 150, 40);

    // User Details
    pdf.setFontSize(12);
    pdf.setTextColor(80);
    pdf.text(`Name: ${this.userData.name}`, 10, 50);
    pdf.text(`Email: ${this.userData.email}`, 10, 60);
    pdf.text(`Shipping Address: ${this.userData.address}`, 10, 70);
    

    // Order Details
    pdf.setFontSize(14);
    pdf.setTextColor(40);
    pdf.text("Order Details", 10, 95);

    // Table Headers
    pdf.setFontSize(12);
    pdf.setTextColor(0);
    let startY = 105;
    pdf.text("Product", 10, startY);
    pdf.text("Quantity", 70, startY);
    pdf.text("Unit Price", 120, startY);
    pdf.text("Total", 160, startY);

    // Draw a line under the table header
    pdf.line(10, startY + 2, 200, startY + 2);
    startY += 10;

    // Table Content
    this.carrtlist.forEach((product) => {
      const name = product.productName || "Unknown Product";
      const quantity = product.quantity || 0;
      const price = product.price || 0;

      pdf.text(name, 10, startY);
      pdf.text(quantity.toString(), 70, startY);
      pdf.text(price.toFixed(2), 120, startY);
      pdf.text((price * quantity).toFixed(2), 160, startY);

      startY += 10;

      // Add a page if the content exceeds the page length
      if (startY > 270) {
        pdf.addPage();
        startY = 20;
      }
    });

    // Subtotal Section
    pdf.setFontSize(14);
    pdf.setTextColor(40);
    startY += 10;
    pdf.text(`Subtotal: LKR ${this.subTotal.toFixed(2)}`, 10, startY);
    pdf.text(`Delivery Charge: LKR ${this.deliveryCharge.toFixed(2)}`, 10, startY+10);
    pdf.text(`Total: LKR ${this.total.toFixed(2)}`, 10, startY+20);

    // Footer
    pdf.setFontSize(10);
    pdf.setTextColor(165, 42, 42);
    pdf.setTextColor(80);
    pdf.text("Thank you for shopping with HappyPaws!", 10, 290);
    pdf.text("Page 1", 190, 290);


    // Save the PDF
    pdf.save("orderReceipt.pdf");
    alert("Order placed successfully!");
  }


  addToCart(product: any, num: number) {
    product.quantity = num;
    this.carrtlist.push(product);
    this.subTotal += product.price * num;
    this.total = this.subTotal + this.deliveryCharge;
    this.displayPopup();      
  }

  showPopup: boolean = false;

  // Method to show the popup
  displayPopup() {
    this.showPopup = true; 
    setTimeout(() => {
      this.showPopup = false; 
    }, 5000);
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
