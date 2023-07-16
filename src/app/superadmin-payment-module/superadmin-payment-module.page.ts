import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-payment-module',
  templateUrl: './superadmin-payment-module.page.html',
  styleUrls: ['./superadmin-payment-module.page.scss'],
})
export class SuperadminPaymentModulePage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    setTimeout(() => {
    this.router.navigate(['/landing']);
  }, 300);
}
}
