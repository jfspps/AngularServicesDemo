import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{
  // define the local array
  accounts: {name: string, status: string}[] = [];

  // inject AccountsService and then initialise with ngOnInit()
  constructor(private accountsService: AccountsService){
  }

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
