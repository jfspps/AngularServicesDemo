import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

  //needed to inject LoggingService; stating AccountsService would override appComponent's AccountsService
  providers: [LoggingService]   
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
      private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    // use injected accountsService to update status
    this.accountsService.updateStatus(this.id, status);

    // using services to minimise code duplication (see also new-account component)
    this.loggingService.logStatusChanged(status);
  }
}
