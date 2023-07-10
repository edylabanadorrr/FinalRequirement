import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  isFormSubmitted = false;

  submitForm(registerForm: NgForm) {
    if (registerForm.invalid) {
      this.isFormSubmitted = true;
      return;
    }
    else {
      this.router.navigate(['/consumer-interface']);
      const { firstName, lastName, accountNumber, username, password } = registerForm.value;
    
    const data = {
      firstName,
      lastName,
      accountNumber,
      username,
      password
    };
    this.http.post('http://localhost:8100/admin-interface', data)
      .subscribe(
        response => {
          console.log('Data saved successfully!', response);
          // Perform any additional actions after saving the data
        },
        
        error => {
          console.error('Error saving data:', error);
          // Handle any errors that occur during data saving
        }
      );

  }
}
}