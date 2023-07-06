import { Component, OnInit } from '@angular/core';
import { Consumer, ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})
export class AdminInterfacePage implements OnInit {
  consumers: Consumer[] = [];

  constructor(private consumerService: ConsumerService) { }

  ngOnInit() {}
}