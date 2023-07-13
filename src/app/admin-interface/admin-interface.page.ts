import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  consumers: Consumer[] = [];
  searchText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchConsumers();
  }
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

  maskPassword(password: string): string {
    return '*'.repeat(password.length);
  }

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
