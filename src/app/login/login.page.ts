import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string;
  password: string;
  isLoggedIn: boolean = false;
  errorMessage: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submitLogin(loginForm: NgForm) {
    if (this.username === 'admin' && this.password === 'admin') {
      this.isLoggedIn = true;
      setTimeout(() => {
        this.router.navigate(['/admin-interface']); // Navigates to the /admin-interface path
      }, 300);
    } else if (this.username === 'cashier' && this.password === 'cashier') {
      this.isLoggedIn = true;
      this.router.navigate(['/cashier']); // Navigates to the /cashier path
    } else if (this.username === 'customerservice' && this.password === 'customerservice') {
      this.isLoggedIn = true;
      this.router.navigate(['/customer-service']); // Navigates to the /customer-service path
    } else {
      // Display an error message or perform other actions for an invalid login attempt
      this.errorMessage = 'Invalid username or password';
    }
  }

}
