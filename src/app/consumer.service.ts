import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class Consumer {
  firstName: string;
  lastName: string;
  accountNumber: number;
  username: string;
  password: string;

  constructor() { }
}

export class ConsumerService {
  constructor() {}
  }

export interface ConsumerData {
  firstName: string;
  lastName: string;
  accountNumber: number;
  username: string;
  password: string;
}