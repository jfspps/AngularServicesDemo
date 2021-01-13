import { Injectable } from "@angular/core";
import { RandomLoggingService } from "./randomlogging.service";

@Injectable()   // enables services to be injected into AccountsService !!
export class AccountsService {

    constructor(private randomMessage: RandomLoggingService){

    }

    // this service manages data, taken from appComponent

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.randomMessage.randomMessage('Random; New account pushed: ' + name);
      }

      updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.randomMessage.randomMessage('Random; Account status update: ' + status);
      }
}