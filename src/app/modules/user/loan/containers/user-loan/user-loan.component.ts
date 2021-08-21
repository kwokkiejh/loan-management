import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/modules/common/models/loan';
import { NewRequestModalComponent } from '../../components/user-loan-table/new-request-modal/new-request-modal.component';
import { UserLoanService } from '../../services/user-loan.service';

@Component({
  selector: 'user-loan',
  templateUrl: './user-loan.component.html',
  styleUrls: ['./user-loan.component.scss'],
})
export class UserLoanComponent {
  public tableData$: Observable<Loan[]>;

  constructor(public dialog: MatDialog, private service: UserLoanService) {
    this.tableData$ = service.loanTableData();
  }
  openNewLoanRequest() {
    this.dialog.open(NewRequestModalComponent, {
      autoFocus: false,
    });
  }
}
