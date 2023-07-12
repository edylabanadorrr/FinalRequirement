import { Component, OnInit } from '@angular/core';

interface ElectricityBill {
  month: string;
  unitsConsumed: number;
  ratePerUnit: number;
  totalAmount: number;
}


@Component({
  selector: 'app-billing-inquiry',
  templateUrl: './billing-inquiry.page.html',
  styleUrls: ['./billing-inquiry.page.scss'],
})


export class BillingInquiryPage implements OnInit {
  const electricityBills: ElectricityBill[] = [
    { month: 'January', unitsConsumed: 200, ratePerUnit: 10.5, totalAmount: 2100 },
    { month: 'February', unitsConsumed: 180, ratePerUnit: 10.5, totalAmount: 1890 },
    { month: 'March', unitsConsumed: 220, ratePerUnit: 10.5, totalAmount: 2310 },
  ];
  function generateElectricityBillSummary(bills: ElectricityBill[]): string {
    let summaryHTML = '';
  
    bills.forEach((bill) => {
      const { month, unitsConsumed, ratePerUnit, totalAmount } = bill;
  
      summaryHTML += `<h3>${month}</h3>`;
      summaryHTML += `<p>Units consumed: ${unitsConsumed}</p>`;
      summaryHTML += `<p>Rate per unit: $${ratePerUnit}</p>`;
      summaryHTML += `<p>Total amount: $${totalAmount.toFixed(2)}</p>`;
      summaryHTML += '<hr>';
    });

    return summaryHTML;
}

    const billSummaryElement = document.getElementById('billSummary');
      if (billSummaryElement) {
        billSummaryElement.innerHTML = generateElectricityBillSummary(electricityBills);
      }
  constructor() { }

  ngOnInit() {
  }
}
