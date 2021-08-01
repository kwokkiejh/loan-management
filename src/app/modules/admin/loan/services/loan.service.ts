import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  public loanTableData(): Observable<Loan[]> {
    return of([
      {
        id: 1,
        item: 'Laptop',
        quantity: 5,
        user: 'Lono Mike',
        status: 'Closed',
      },
      {
        id: 2,
        item: 'iPad',
        quantity: 2,
        user: 'Mark Otto',
        status: 'Pending Review - Return',
      },
      {
        id: 3,
        item: 'Phone',
        quantity: 5,
        user: 'Jon Nie',
        status: 'Pending Review - Approval',
      },
      {
        id: 4,
        item: 'Phone',
        quantity: 5,
        user: 'Jon Nie',
        status: 'Pending Review - Approval',
      },
      {
        id: 5,
        item: 'Phone',
        quantity: 5,
        user: 'Jon Nie',
        status: 'Pending Review - Approval',
      },
      {
        id: 6,
        item: 'Phone',
        quantity: 5,
        user: 'Jon Nie',
        status: 'Pending Review - Approval',
      },
      {
        id: 7,
        item: 'Phone',
        quantity: 5,
        user: 'Jon Nie',
        status: 'Pending Review - Approval',
      },
    ]);
  }
}
