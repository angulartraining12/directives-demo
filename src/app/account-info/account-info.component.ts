import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent {
    // data
    balance:number = 300;
    minBalance:number = 500;
    isDormant : boolean = false;
    // KVR : 12/12/23 : Added below variable to display deposit machine message in template
    accountType : string = "loan";
    isSalaryAcct : boolean = false;

    branches : string[] = ["Hyderabad", "Vijayawada", "Bangalore"];

    
 


}
