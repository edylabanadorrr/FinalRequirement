import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationComponent } from '../registration/registration.component';

interface Consumer {
  firstName: string;
  lastName: string;
  accountNumber: string;
  areaNumber: string;
  municipality: string;
  username: string; 
  password: string;
}

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})

export class AdminInterfacePage implements OnInit {
  firstName: string;
  lastName: string;
  accountNumber: string;
  areaNumber: string;
  municipality: string;
  username: string;
  password: string;
  consumers: Consumer[] = [];
  searchText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchConsumers();
  }
  // Fetch Data from database
  fetchConsumers() {
    this.http.get<any>('http://localhost/ionic/fetch.php').subscribe(
      (data) => {
      this.consumers = data;
      console.log(this.consumers);
    },
    (error) => {
      console.error('Error fetching consumer data:', error);
    }
    );
  }
  // Password encryption
  maskPassword(password: string): string {
    return '*'.repeat(password.length);
  }
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
}
  // Fetch data in input fields 
  populateFields(consumer: any) {
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const accountNumberInput = document.getElementById('accountNumber') as HTMLInputElement;
    const areaNumberInput = document.getElementById('areaNumber') as HTMLInputElement;
    const municipalityInput = document.getElementById('municipality') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    firstNameInput.value = consumer.firstName;
    lastNameInput.value = consumer.lastName;
    accountNumberInput.value = consumer.accountNumber;
    areaNumberInput.value = consumer.areaNumber;
    municipalityInput.value = consumer.municipality;
    usernameInput.value = consumer.username;
    passwordInput.value = consumer.password;
  }

  // Search Function
  get filteredConsumers(): Consumer[] {
    return this.consumers.filter(consumer => {
      const fullName = consumer.firstName + ' ' + consumer.lastName;
      return fullName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        consumer.accountNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
        consumer.areaNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
        consumer.municipality.toLowerCase().includes(this.searchText.toLowerCase()) ||
        consumer.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
        consumer.password.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
