import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
  firstName: string;
  lastName: string;
  accountNumber: string;
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
    });
  }

  searchItems(searchTerm: string) {
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredItems = this.jsonData.filter((item) => {
        return (
          item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.password.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    } else {
      this.filteredItems = this.jsonData;
    }
  }
}
