import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Appointment {
  type: string;
  veterinarian: string;
  date: string;
  time: string;
  email: string;
}

@Component({
  selector: 'app-petpage',
  templateUrl: './petpage.component.html',
  styleUrls: ['./petpage.component.css']
})
export class PetpageComponent {
  userData = {
    email: localStorage.getItem('email'),
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password'),
    birthday: localStorage.getItem('birthday'),
    breed: localStorage.getItem('breed'),
    name: localStorage.getItem('name'),
    gender: localStorage.getItem('gender'),
    petName: localStorage.getItem('pet_name'),
    petPicture: localStorage.getItem('pet_picture'),
    weight: localStorage.getItem('weight'),
    height: localStorage.getItem('height'),
    alergies: localStorage.getItem('alergies')
  };
  lastPastAppointment: Appointment | null = null;
  nextUpcomingAppointment: Appointment | null = null;

  constructor(private http: HttpClient) {
    this.loadAppointments();      
  }

  loadAppointments() {
    this.http.get<Appointment[]>('http://localhost:8080/appointment/get-all').subscribe(
      (response) => {
        const today = new Date();
        let latestPast: Appointment | null = null;
        let upcomingNext: Appointment | null = null;

        response.forEach(appointment => {
          const appointmentDate = new Date(appointment.date);
          
          if (appointment.email === localStorage.getItem('email')) {
            if (appointmentDate < today) {
              if (!latestPast || appointmentDate > new Date(latestPast.date)) {
                latestPast = appointment;
              }
            } else {
              if (!upcomingNext || appointmentDate < new Date(upcomingNext.date)) {
                upcomingNext = appointment;
              }
            }
          }
        });

        this.lastPastAppointment = latestPast || { type: 'empty', veterinarian: 'empty', date: 'empty', time: 'empty', email: '' };
        this.nextUpcomingAppointment = upcomingNext || { type: 'empty', veterinarian: 'empty', date: 'empty', time: 'empty', email: '' };
      },
      (error) => {
        console.error("Error fetching appointments:", error);
        this.lastPastAppointment = { type: 'error', veterinarian: 'N/A', date: 'N/A', time: 'N/A', email: '' };
        this.nextUpcomingAppointment = { type: 'error', veterinarian: 'N/A', date: 'N/A', time: 'N/A', email: '' };
      }
    );
  }
}
