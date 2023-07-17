import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface billSummary {
  billSummaryID: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  currentBill: string;
  dueDate: string;
  status: string;
}

interface BillPayment {
  paymentID: string;
  billSummaryID: string;
  ConsumerID: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  currentBill: string;
  payment: string;
}

@Component({
  selector: 'app-superadmin-payment-module',
  templateUrl: './superadmin-payment-module.page.html',
  template: ' <button (click)="confirmLogout()">Logout</button>',
  styleUrls: ['./superadmin-payment-module.page.scss'],
})

export class SuperadminPaymentModulePage implements OnInit {
  paymentID: number;
  billSummaryID: number;
  ConsumerID: number;
  firstName: string;
  lastName: string;
  accountNumber: string;
  currentBill: string;
  dueDate: string;
  status: string;
  payment: string;
  billSummary: billSummary[] = [];
  billPayment: BillPayment[] = [];
  searchText: string;
  selectedPayment: BillPayment | null = null;
  selectedConsumer: billSummary | null = null;

constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { 
  this.paymentID = 0;
  this.billSummaryID = 0;
  this.ConsumerID = 0;
  this.firstName = '';
  this.lastName = '';
  this.accountNumber = '';
  this.currentBill = '';
  this.dueDate = '';
  this.status = '';
  this.payment = '';
}

ngOnInit() {
  this.loadBillSummary();
  this.loadBillPayment();
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

loadBillPayment() {
  this.http.get< any >('http://localhost/ionic/billpayment.php').subscribe(
    (data) => {
      this.billPayment = data;
      console.log(this.billPayment);
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

// Search Function
get filteredPayment(): BillPayment[] {
  return this.billPayment.filter(billPayment => {
    const fullName = (billPayment.firstName + ' ' + billPayment.lastName).toLowerCase();
    const accountNumber = billPayment.accountNumber?.toString().toLowerCase();
    const currentBill = billPayment.currentBill?.toLowerCase();
    const payment = billPayment.payment?.toLowerCase();

    return fullName.includes(this.searchText?.toLowerCase() ?? '') ||
      accountNumber?.includes(this.searchText?.toLowerCase() ?? '') ||
      currentBill?.includes(this.searchText?.toLowerCase() ?? '') ||
      payment?.includes(this.searchText?.toLowerCase() ?? '');
  });
}

/* Logout Function */

async confirmLogout() {
  const alert = await this.alertController.create({
    header: 'Logout',
    message: 'Are you sure you want to log out?',
    buttons: [
      {
        text: 'No',
        role: 'cancel'
      },
      {
        text: 'Yes',
        handler: () => {
          this.logout();
        }
      }
    ]
  });

  await alert.present();
}

logout() {
  setTimeout(() => {
  this.router.navigate(['/landing']);
    }, 300);
  }
}
