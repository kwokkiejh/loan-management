import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../../../../common/models/loan';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'admin-loan',
  templateUrl: './admin-loan.component.html',
  styleUrls: ['./admin-loan.component.scss'],
})
export class AdminLoanComponent {
  public tableData$: Observable<Loan[]>;

  constructor(private service: LoanService) {
    this.tableData$ = service.loanTableData();
  }
}
