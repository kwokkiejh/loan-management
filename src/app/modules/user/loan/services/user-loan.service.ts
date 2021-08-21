import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Loan } from '../../../common/models/loan';

@Injectable({
  providedIn: 'root',
})
export class UserLoanService {
  public loanTableData(): Observable<Loan[]> {
    return of([
      {
        id: 1,
        item: 'Laptop',
        quantity: 2,
        user: 'Lono Mike',
        status: 'Closed',
      },
      {
        id: 2,
        item: 'iPad',
        quantity: 1,
        user: 'Lono Mike',
        status: 'Approved',
      },
      {
        id: 3,
        item: 'Phone',
        quantity: 1,
        user: 'Lono Mike',
        status: 'Pending Review - Approval',
      },
    ]);
  }
}
