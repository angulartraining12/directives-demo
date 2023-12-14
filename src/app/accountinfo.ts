// Model
export class AccountInfo {
    accountType: string ;
    accountNumber: string;
    balance : number;

    // Default or no-arg constructor
    // constructor(){
    //     this.accountType = "";
    //     this.accountNumber ="";
    //     this.balance = 0;
    // }

    // Parameterized constructor
    constructor(accttype:string, acctnum:string, bal:number){
        this.accountType = accttype;
        this.accountNumber =acctnum;
        this.balance = bal;
    }

}
