import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

interface billSummary {
  billSummaryID: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  currentBill: string;
  dueDate: string;
  status: string;
}
@Component({
  selector: 'app-superadmin-payment-module',
  templateUrl: './superadmin-payment-module.page.html',
  styleUrls: ['./superadmin-payment-module.page.scss'],
})

export class SuperadminPaymentModulePage implements OnInit {
  billSummaryID: number;
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
  
// Fetch data in input fields 
populateFields(billSummary: billSummary) {
  this.selectedConsumer = billSummary;
  this.firstName = billSummary.firstName;
  this.lastName = billSummary.lastName;
  this.accountNumber = billSummary.accountNumber;
  this.currentBill = billSummary.currentBill;
  this.dueDate = billSummary.dueDate;
  this.status = billSummary.status;
}

updateBillSummary() {
  if (this.selectedConsumer !== null) {
    const formData: billSummary = {
      billSummaryID: this.selectedConsumer.billSummaryID,
      firstName: this.firstName,
      lastName: this.lastName,
      accountNumber: this.accountNumber,
      currentBill: this.currentBill,
      dueDate: this.dueDate,
      status: this.status,
    };
        
      this.http.post('http://localhost/ionic/billsummary-update.php', formData)
      .subscribe(response => {
      console.log(response); // Handle success scenario
      // Reset selected customer and form fields
      this.selectedConsumer = null;
      this.clearForm();
      this.loadBillSummary(); // Update the customer list after the update
    });
  }
}

// Clear Function
clearForm() {
  this.firstName = '';
  this.lastName = '';
  this.accountNumber = '';
  this.currentBill = '';
  this.dueDate = '';
  this.status = '';
}

// Search Function
get filteredConsumers(): billSummary[] {
  return this.billSummary.filter(billSummary => {
    const fullName = (billSummary.firstName + ' ' + billSummary.lastName).toLowerCase();
    const accountNumber = billSummary.accountNumber?.toString().toLowerCase();
    const currentBill = billSummary.currentBill?.toLowerCase();
    const dueDate = billSummary.dueDate?.toLowerCase();
    const status = billSummary.status?.toLowerCase();

    return fullName.includes(this.searchText?.toLowerCase() ?? '') ||
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
