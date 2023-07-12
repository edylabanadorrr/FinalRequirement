import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Consumer {
  firstName: string;
  lastName: string;
  accountNumber: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})
export class AdminInterfacePage implements OnInit {
  consumers: Consumer[];
  filteredConsumers: Consumer[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.http.get<{ consumers: Consumer[] }>('assets/data/super-admin-data.json').subscribe(
      (data) => {
        this.consumers = data.consumers;
        this.filteredConsumers = this.consumers;
        console.log(this.consumers);
      },
      (error) => {
        console.error('Error fetching consumer data:', error);
      }
    );
  }
  populateFields(consumer: any) {
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const accountNumberInput = document.getElementById('accountNumber') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    firstNameInput.value = consumer.firstName;
    lastNameInput.value = consumer.lastName;
    accountNumberInput.value = consumer.accountNumber;
    usernameInput.value = consumer.username;
    passwordInput.value = consumer.password;
  }

  searchItems(searchTerm: string) {
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredConsumers = this.consumers.filter((consumer) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
          consumer.firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
          consumer.lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
          consumer.accountNumber.toString().includes(searchTerm) ||
          consumer.username.toLowerCase().includes(lowerCaseSearchTerm) ||
          consumer.password.toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
    } else {
      this.filteredConsumers = this.consumers;
    }
  }
  
  maskPassword(password: string): string {
    return '*'.repeat(password.length);
  }
  
  updateConsumerData(consumers: any) {
    var selectedRow = consumers;

    if (!selectedRow) {
      alert('Please select a consumer from the table.');
      return;
    }
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const accountNumberInput = document.getElementById('accountNumber') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    firstNameInput.value = consumers.firstName;
    lastNameInput.value = consumers.lastName;
    accountNumberInput.value = consumers.accountNumber;
    usernameInput.value = consumers.username;
    passwordInput.value = consumers.password;
    
    this.http.get<{ consumers: Consumer[] }>('assets/data/super-admin-data.json').subscribe(
      (data) => {
        this.consumers = data.consumers;
        this.filteredConsumers = this.consumers;
        console.log(this.consumers);
        this.clearForm();
      },
      (error) => {
        console.error('Error fetching consumer data:', error);
      }
    );
  }
  
  clearForm() {
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const accountNumberInput = document.getElementById('accountNumber') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    firstNameInput.value = '';
    lastNameInput.value = '';
    accountNumberInput.value = '';
    usernameInput.value = '';
    passwordInput.value = '';
  }
}
