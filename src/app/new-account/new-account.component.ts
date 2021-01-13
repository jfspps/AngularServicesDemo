import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  //needed to inject LoggingService; stating AccountsService would override appComponent's AccountsService
  providers: [LoggingService]   
})
export class NewAccountComponent {

  // note that we no longer need to bind data with emitters
  constructor(private loggingService: LoggingService,
      private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);
    // using services to minimise code duplication (see also account component)
    this.loggingService.logStatusChanged(accountStatus);

    // use AccountService (see appModule) to add an account
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
