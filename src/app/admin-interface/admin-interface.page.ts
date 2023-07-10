import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Consumer {
  firstName: string;
  lastName: string;
  accountNumber: number;
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
    this.http.get<{ consumers: Consumer[] }>('assets/data/data.json').subscribe(
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
}
