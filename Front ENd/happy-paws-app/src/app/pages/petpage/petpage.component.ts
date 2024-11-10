import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-petpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './petpage.component.html',
  styleUrl: './petpage.component.css'
})
export class PetpageComponent {
  public Pet: any = {
    name: "Bruno",
    birthday: "2020.12.06",
    breed: "German Shepherd",
    gender: "Male",
    owner: "John Doe",
  }
}
