import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface accountDetails {
  fullName: string;
  accountNumber: number;
  areaNumber: number;
  municipality: string;
  currentBilling: number;
  dueDate: Date;
}
@Component({
  selector: 'app-billing-inquiry',
  templateUrl: './billing-inquiry.page.html',
  styleUrls: ['./billing-inquiry.page.scss'],
})


export class BillingInquiryPage implements OnInit {
  fullName: string;
  accountNumber: number;
  areaNumber: number;
  municipality: string;
  currentBilling: number;
  dueDate: Date;
  accountDetails: accountDetails[];
  filteredConsumers: accountDetails[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadAccountDetails();
  }

  loadAccountDetails() {
    this.http.get<{ accountDetails: accountDetails[] }>('assets/data/account-details.json').subscribe(
      (data) => {
        this.accountDetails = data.accountDetails;
        this.filteredConsumers = this.accountDetails;
        console.log(this.accountDetails);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  searchItems(searchTerm: string) {
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredConsumers = this.accountDetails.filter((accountDetail) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
          accountDetail.fullName.toLowerCase().includes(lowerCaseSearchTerm) ||
          accountDetail.accountNumber.toString().includes(searchTerm) ||
          accountDetail.areaNumber.toString().includes(searchTerm) ||
          accountDetail.municipality.toLowerCase().includes(lowerCaseSearchTerm) ||
          accountDetail.currentBilling.toString().includes(searchTerm) ||
          accountDetail.dueDate.toString().includes(searchTerm)
        );
      });
    } else {
      this.filteredConsumers = this.accountDetails;
    }
  }
  
  logout() {
    setTimeout(() => {
    this.router.navigate(['/landing']);
  }, 300);
}
}
