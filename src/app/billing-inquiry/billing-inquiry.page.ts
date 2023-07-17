import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface billSummary {
  billSummaryID: string;
  ConsumerID: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  currentBill: string;
  dueDate: string;
  status: string;
}
@Component({
  selector: 'app-billing-inquiry',
  templateUrl: './billing-inquiry.page.html',
  styleUrls: ['./billing-inquiry.page.scss'],
})


export class BillingInquiryPage implements OnInit {
  billSummaryID: number;
  ConsumerID: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  currentBill: string;
  dueDate: string;
  status: string;
  billSummary: billSummary[] = [];
  searchText: string;
  selectedConsumer: billSummary | null = null;

  constructor(private http: HttpClient, private router: Router) { 
    this.billSummaryID = 0;
    this.ConsumerID = '';
    this.firstName = '';
    this.lastName = '';
    this.accountNumber = '';
    this.currentBill = '';
    this.dueDate = '';
    this.status = '';
  }

  ngOnInit() {
    this.loadBillSummary();
  }

  loadBillSummary() {
    this.http.get< any >('http://localhost/ionic/billsummary.php').subscribe(
      (data) => {
        this.billSummary = data;
        console.log(this.billSummary);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
// Search Function
get filteredConsumers(): billSummary[] {
  return this.billSummary.filter(billSummary => {
    const fullName = (billSummary.firstName + ' ' + billSummary.lastName).toLowerCase();
    const ConsumerID = billSummary.ConsumerID?.toString().toLowerCase();
    const accountNumber = billSummary.accountNumber?.toString().toLowerCase();
    const currentBill = billSummary.currentBill?.toLowerCase();
    const dueDate = billSummary.dueDate?.toLowerCase();
    const status = billSummary.status?.toLowerCase();

    return fullName.includes(this.searchText?.toLowerCase() ?? '') ||
      ConsumerID?.includes(this.searchText?.toLowerCase() ?? '') ||
      accountNumber?.includes(this.searchText?.toLowerCase() ?? '') ||
      currentBill?.includes(this.searchText?.toLowerCase() ?? '') ||
      dueDate?.includes(this.searchText?.toLowerCase() ?? '') ||
      status?.includes(this.searchText?.toLowerCase() ?? '');
  });
}

  logout() {
    setTimeout(() => {
    this.router.navigate(['/landing']);
  }, 300);
}
}
