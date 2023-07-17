import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Request {
  requestID: string;
  accountNumber: string;
  email: string;
  contactNumber: string;
}

@Component({
  selector: 'app-superadmin-request',
  templateUrl: './superadmin-request.page.html',
  template: ' <button (click)="confirmLogout()">Logout</button>',
  styleUrls: ['./superadmin-request.page.scss'],
})

export class SuperadminRequestPage implements OnInit {
  requestID: number;
  accountNumber: string;
  email: string;
  contactNumber: string;
  requests: Request[] = [];
  searchText: string = '';
  selectedConsumer: Request | null = null;

  formData: Request = {
    requestID: '',
    accountNumber: '',
    email: '',
    contactNumber: '',
  };

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) {
    this.requestID = 0;
    this.accountNumber = '';
    this.email = '';
    this.contactNumber = '';
  }

ngOnInit() {
  this.fetchRequests();
}

// Fetch Data from database
  fetchRequests() {
    this.http.get<any>('http://localhost/ionic/passwordrequest.php').subscribe(
      (data) => {
        console.log(data); // Log the response data
        this.requests = data;
        console.log(this.requests);
      },
      (error) => {
        console.error('Error fetching consumer data:', error);
      }
      );
    }

// Search Function
get filteredRequests(): Request[] {
  return this.requests.filter(request => {
    const requestID = request.requestID?.toString().toLowerCase();
    const accountNumber = request.accountNumber?.toString().toLowerCase();
    const email = request.email?.toLowerCase();
    const contactNumber = request.contactNumber?.toLowerCase();

    return (
      requestID?.includes(this.searchText?.toLowerCase() ?? '') ||
      accountNumber?.includes(this.searchText?.toLowerCase() ?? '') ||
      email?.includes(this.searchText?.toLowerCase() ?? '') ||
      contactNumber?.includes(this.searchText?.toLowerCase() ?? '')
    );
  });
}

// Fetch data in input fields 
  populateFields(request: Request) {
    this.selectedConsumer = request;
    this.accountNumber = request.accountNumber;
    this.email = request.email;
    this.contactNumber = request.contactNumber;
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
