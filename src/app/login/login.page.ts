import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Credential {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  username: string;
  password: string;
  errorMessage: string;
  credentials: Credential[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<{ credentials: Credential[] }>('assets/data/data.json').subscribe(
      (data) => {
        this.credentials = data.credentials;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  submitLogin(loginForm: any) {
    const matchedUser = this.credentials.find(credentials => credentials.username === this.username && credentials.password === this.password);

    if (matchedUser) {
      console.log('Login successful');
      setTimeout(() => {
      this.router.navigate(['/consumer-interface']);
    }, 300);
  }
    else if (this.username === "1111" && this.password === "admin") {
      console.log('Login successful');
      setTimeout(() => {
      this.router.navigate(['/admin-interface']);
    }, 300);
  }
    else if (this.username === "2222" && this.password === "cashier") {
      console.log('Login successful');
      setTimeout(() => {
      this.router.navigate(['/cashier']);
    }, 300);
  }
    else if (this.username === "3333" && this.password === "cservice") {
      console.log('Login successful');
      setTimeout(() => {
      this.router.navigate(['/customer-service']);
    }, 300);
  }
    else {
    console.log('Invalid credentials');
    // Display an error message or perform other actions for invalid credentials
    this.errorMessage = 'Invalid credentials';
    }
  }
}
