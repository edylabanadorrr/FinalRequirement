import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }
  isFormSubmitted = false;
  submitForm(registerForm: any) {
    if (registerForm.invalid) {
      this.isFormSubmitted = true;    
      return;
    }
    else {
    // Handle form submission logic here
    // You can perform form validation, data processing, or navigate to another interface
    console.log('Form submitted');
    console.log(registerForm.value); // Access the form values

    this.router.navigate(['/interface']); //Navigates where when the user clicks the button
  }

  }
}
