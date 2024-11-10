import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-appointmentpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointmentpage.component.html',
  styleUrl: './appointmentpage.component.css'
})


export class AppointmentpageComponent {
  public appointment: any = {
    "type": "",
    "veterinarian": "",
    "date": "",
    "time": "",
    "owner_name": "Nisal Themiya"
  };

  constructor(private http: HttpClient) {
    this.loadAppointments();
  }
  public appointmentsList: any = [];
  pastAppointments: any[] = [];
  upcomingAppointments: any[] = [];

  public addAppointment() {
    if (this.appointment.type == "" || this.appointment.veterinarian == "" || this.appointment.date == "" || this.appointment.time == "" || this.appointment.owner_name == "") {
      alert("Please fill in all the fields");
      return;
    }
    this.http.post('http://localhost:8080/appointment/add-appointment', this.appointment).subscribe((response) => {
      alert('Appointment added successfully!');
      this.loadAppointments()
    });
  }

  loadAppointments() {
    this.pastAppointments = []; 
    this.upcomingAppointments = [];
    
    this.http.get<any[]>('http://localhost:8080/appointment/get-all').subscribe(
      (response) => {
        const today = new Date();
        
        if (!response || response.length === 0) {
          this.appointmentsList = [{ type: 'empty', veterinarian: 'empty', date: 'empty', time: 'empty' }];
        } else {
          response.forEach(appointment => {
            const appointmentDate = new Date(appointment.date);

            if (appointmentDate < today) {
              this.pastAppointments.push(appointment);
            } else {
              this.upcomingAppointments.push(appointment);
            }
          });
        }

        console.log("Past Appointments:", this.pastAppointments);
        console.log("Upcoming Appointments:", this.upcomingAppointments);
      },
      (error) => {
        console.error("Error fetching appointments:", error);
        this.pastAppointments = [{ type: 'error', veterinarian: 'N/A', date: 'N/A', time: 'N/A' }];
        this.upcomingAppointments = [{ type: 'error', veterinarian: 'N/A', date: 'N/A', time: 'N/A' }];
      }
    );
}

}
