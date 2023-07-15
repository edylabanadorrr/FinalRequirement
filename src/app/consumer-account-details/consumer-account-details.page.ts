import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
interface Consumer {
  id: number;
  firstName: string;
  lastName: string;
  accountNumber: string;
  areaNumber: string;
  municipality: string;
  username: string; 
  password: string;
}

@Component({
  selector: 'app-consumer-account-details',
  templateUrl: './consumer-account-details.page.html',
  styleUrls: ['./consumer-account-details.page.scss'],
})
export class ConsumerAccountDetailsPage implements OnInit {
  firstName: string;
  lastName: string;
  accountNumber: string;
  areaNumber: string;
  municipality: string;
  username: string;
  password: string;
  consumers: Consumer[] = [];
  searchText: string = '';
  selectedConsumer: Consumer;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAccountDetails();
  }
    // Fetch Data from database
    getAccountDetails() {
      this.http.get<any>('http://localhost/ionic/consumer-account-details.php').subscribe(
        (response) => {
          // Extract the account details from the response
          const { firstName, lastName, accountNumber, areaNumber, municipality, username, password } = response;
  
          // Assign the retrieved account details to the component variables
          this.firstName = firstName;
          this.lastName = lastName;
          this.accountNumber = accountNumber;
          this.areaNumber = areaNumber;
          this.municipality = municipality;
          this.username = username;
          this.password = password;
        },
        (error) => {
          console.error('Error fetching account details:', error);
        }
      );
    }
    updateConsumer() {
      const inputData = new FormData();
      inputData.append('firstName', this.firstName);
      inputData.append('lastName', this.lastName);
      inputData.append('accountNumber', this.accountNumber);
      inputData.append('areaNumber', this.areaNumber);
      inputData.append('municipality', this.municipality);
      inputData.append('username', this.username);
      inputData.append('password', this.password);

      this.http.post('http://localhost/ionic/update.php', inputData)
        .subscribe(response => {
          console.log(response);
          // Handle response or perform any necessary actions
        });
        this.clearForm();
    }
      // Fetch data in input fields 
      populateFields(consumer: any) {
        const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
        const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
        const accountNumberInput = document.getElementById('accountNumber') as HTMLInputElement;
        const areaNumberInput = document.getElementById('areaNumber') as HTMLInputElement;
        const municipalityInput = document.getElementById('municipality') as HTMLInputElement;
        const usernameInput = document.getElementById('username') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;

        firstNameInput.value = consumer.firstName;
        lastNameInput.value = consumer.lastName;
        accountNumberInput.value = consumer.accountNumber;
        areaNumberInput.value = consumer.areaNumber;
        municipalityInput.value = consumer.municipality;
        usernameInput.value = consumer.username;
        passwordInput.value = consumer.password;
      }
      // Clear Function
  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.accountNumber = '';
    this.areaNumber = '';
    this.municipality = '';
    this.username = '';
    this.password = '';
  }
    // Search Function
    get filteredConsumers(): Consumer[] {
      return this.consumers.filter(consumer => {
        const fullName = consumer.firstName + ' ' + consumer.lastName;
        return fullName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          consumer.accountNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
          consumer.areaNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
          consumer.municipality.toLowerCase().includes(this.searchText.toLowerCase()) ||
          consumer.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
          consumer.password.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
}
