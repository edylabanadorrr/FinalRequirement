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
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  isFormSubmitted = false;

  submitForm(registerForm: NgForm) {
    if (registerForm.invalid) {
      this.isFormSubmitted = true;
      return;
    }

    const formData = {
      firstName: registerForm.value.firstName,
      lastName: registerForm.value.lastName,
      accountNumber: registerForm.value.accountNumber,
      Username: registerForm.value.Username,
      password: registerForm.value.password,
    };

    const jsonData = JSON.stringify(formData);

    this.saveData(jsonData);
  }

  saveData(jsonData: string) {
    const url = 'http://localhost:8100/registration'; // Replace with your server endpoint URL

    // Send the POST request to the server
    this.http.post(url, jsonData).subscribe(
      (response) => {
        console.log('Data saved successfully!', response);
        // Optionally, you can show a success message to the user or navigate to a different page
      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle the error as needed (e.g., display an error message)
      }
    );
  }
}
