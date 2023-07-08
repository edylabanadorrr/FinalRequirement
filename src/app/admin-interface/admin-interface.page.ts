import { Component, OnInit } from '@angular/core';
import { Consumer, ConsumerService } from '../consumer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})

export class AdminInterfacePage implements OnInit {
  jsonData: any;

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get('assets/super-admin-data.json').subscribe((data) => {
      this.jsonData = data;
    });
  }

  ngOnInit() {}
}