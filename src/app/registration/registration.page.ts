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
    else {
      // Handle form submission logic here
      // You can perform form validation, data processing, or navigate to another interface
      console.log('Form submitted');
      console.log(registerForm.value); // Access the form values
      this.router.navigate(['/consumer-interface']); //Navigates where when the user clicks the button
    }
    const formData = {
      firstName: registerForm.value.firstName,
      lastName: registerForm.value.lastName,
      accountNumber: registerForm.value.accountNumber,
      username: registerForm.value.username,
      password: registerForm.value.password
    };

    const jsonData = JSON.stringify(formData);

    this.saveData(jsonData);
  }
  saveData(jsonData: string) {
    const url = 'http://localhost:8100/consumers'; // Replace with your server endpoint URL
  
    // Send the POST request to the server
    this.http.post(url, jsonData)
      .subscribe(
        (response) => {
          console.log('Data saved successfully!', response);
        },
        (error) => {
          console.error('Error saving data:', error);
        }
      );
  }
}
