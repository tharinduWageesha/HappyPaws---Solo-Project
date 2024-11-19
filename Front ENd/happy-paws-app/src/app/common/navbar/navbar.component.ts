import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public tempUser: any = {
    email: '',
    password: '',
    errmsg: '',
    logstatus: 'not logged in',
    keyinbtnlogin: 'Log In',
    bday: '',
    address: '',
    owner_name: '',
    petname: '',
    breed: '',
    gender: '',
    petpicture: '',
    weight: '',
    height: '',
    alergies: '',
  };
  newuser: any = {
    donemsg: '',
  };
  public isLoginFormVisible: boolean = true;
  public isSignupFormVisible: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}


  toggleForms(): void {
    this.isLoginFormVisible = !this.isLoginFormVisible;
    this.isSignupFormVisible = !this.isSignupFormVisible;
  }

  public isLogoutDisabled = false;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogoutDisabled = ['/yourpet', '/appointments'].includes(event.urlAfterRedirects);
      }
    });
  }

  showLoginAlert() {
    alert("Please login to access this page.");
  }

  logout(event: Event) {
    event.preventDefault();
    if (!this.isLogoutDisabled) {
      localStorage.clear();
      this.tempUser.keyinbtnlogin = 'Log In';
      this.tempUser.logstatus = 'not logged in';
    }
  }
  
  addUser() {
    if(this.newuser.password =="" || this.newuser.email=="" || this.newuser.owner_name=="" || this.newuser.address=="" || this.newuser.petName=="" || this.newuser.breed=="" || this.newuser.birthday=="" || this.newuser.weight=="" || this.newuser.height=="" || this.newuser.gender=="" || this.newuser.petPicture=="" ){
      this.tempUser.errmsg = 'Please fill in all the fields.';
      return;
    }
    console.log(this.newuser);
    this.http.post('http://localhost:8080/user/add-user', this.newuser).subscribe(
      (response) => {
        this.tempUser.errmsg = 'Signed up successfully!';
        console.log(response);
        this.newuser.donemsg = 'Now you can log in with your email and password!';
      },
      (error) => {
        this.tempUser.errmsg = 'Error during sign-up.';
        console.error(error);
      }
    );
  }

  loadUserDetails() {
    const { email, password } = this.tempUser;

    this.http.get<any>(`http://localhost:8080/user/search-by-email/${email}`).subscribe(
      (response) => {
        if (!response) {
          this.tempUser.errmsg = 'User not found...';
        } else if (response.password === password) {
          this.storeUserDetails(response);
          this.tempUser.logstatus = 'logged in';
          this.tempUser.errmsg = 'Logged in successfully...';
          this.tempUser.keyinbtnlogin = 'Log Out';
        } else {
          this.tempUser.errmsg = 'Invalid password or email...';
        }
      },
      (error) => {
        alert('Error fetching user details.');
        console.error("Error:", error);
      }
    );
  }

  private storeUserDetails(user: any) {
    const userDetails = [
      'email','address', 'username', 'password', 'birthday', 'breed', 'name',
      'pet_name', 'pet_picture', 'gender', 'weight', 'height', 'alergies'
    ];
    userDetails.forEach((detail) => {
      if (user[detail] !== undefined) {
        localStorage.setItem(detail, user[detail]);
      }
    });
  }
}
