import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
  firstName: string;
  lastName: string;
  accountNumber: number;
  userName: string;
  password: string;
}

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})
export class AdminInterfacePage implements OnInit {
  jsonData: Item[];
  filteredItems: Item[];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<Item[]>('assets/super-admin-data.json').subscribe((data) => {
      this.jsonData = data;
      this.filteredItems = this.jsonData;
      console.log(this.jsonData);
    });
  }

  searchItems(searchTerm: string) {
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredItems = this.jsonData.filter((item) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
          item.firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.accountNumber.toString().toLowerCase().includes(lowerCaseSearchTerm) ||
          item.userName.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.password.toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
    } else {
      this.filteredItems = this.jsonData;
    }
  }
}