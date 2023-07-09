import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-inquiry',
  templateUrl: './billing-inquiry.component.html',
  styleUrls: ['./billing-inquiry.component.scss'],
})
export class BillingInquiryComponent  implements OnInit {
  formData = {
    accountNumber: '',
    invoiceNumber: ''
  };
  submitted = false;
  
  submitForm() {
    // Perform billing inquiry logic here (e.g., send API request, process data)

    // Simulate a delay to show the thank you message
    setTimeout(() => {
      this.submitted = true;
    }, 1000);
  }
  constructor() { }

  ngOnInit() {}

}
