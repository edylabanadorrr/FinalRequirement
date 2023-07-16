import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-interface',
  templateUrl: './consumer-interface.page.html',
  styleUrls: ['./consumer-interface.page.scss'],
})
export class ConsumerInterfacePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  logout() {
    setTimeout(() => {
    this.router.navigate(['/landing']);
  }, 300);
}
}
