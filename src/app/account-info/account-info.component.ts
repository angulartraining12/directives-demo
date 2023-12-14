import { Component } from '@angular/core';
import { AccountInfo } from '../accountinfo';

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


    accontInfo1 : AccountInfo = new AccountInfo("Savings", "11111",10000);
    accontInfo2 : AccountInfo = new AccountInfo("Current", "222222",20000);
    accontInfo3 : AccountInfo = new AccountInfo("Loan", "222222",0);



    accountInfoArr : AccountInfo[] = [this.accontInfo1, this.accontInfo2, this.accontInfo3];

}
