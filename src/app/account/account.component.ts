import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService) {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // using services to minimise code duplication (see also new-account component)
    this.loggingService.logStatusChanged(status);
  }
}
