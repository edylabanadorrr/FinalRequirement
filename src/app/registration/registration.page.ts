import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  firstName: string;
  lastName: string;
  accountNumber: string;
  areaNumber: string;
  municipality: string;
  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) {}
  
  submitForm() {
    const formData = new FormData();
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('accountNumber', this.accountNumber);
    formData.append('areaNumber', this.areaNumber);
    formData.append('municipality', this.municipality);
    formData.append('username', this.username);
    formData.append('password', this.password);

    this.http.post('http://localhost/ionic/registration.php', formData)
      .subscribe(response => {
        console.log(response);
        // Handle response or perform any necessary actions
      });
      setTimeout(() => {
      this.router.navigate(['/consumer-interface']);
  }, 300);
}
  ngOnInit() {}
}

