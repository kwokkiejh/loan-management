import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Inventory } from '../../../common/models/inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public inventoryTableData(): Observable<Inventory[]> {
    return of([
      {
        id: 1,
        item: 'Laptop',
        totalQuantity: 30,
        availableQuantity: 15,
        onLoanQuantity: 15,
      },
      {
        id: 2,
        item: 'iPad',
        totalQuantity: 10,
        availableQuantity: 5,
        onLoanQuantity: 5,
      },
      {
        id: 1,
        item: 'iPhone',
        totalQuantity: 20,
        availableQuantity: 15,
        onLoanQuantity: 5,
      },
      {
        id: 1,
        item: 'Camera',
        totalQuantity: 15,
        availableQuantity: 10,
        onLoanQuantity: 5,
      },
      {
        id: 1,
        item: 'Mouse',
        totalQuantity: 20,
        availableQuantity: 15,
        onLoanQuantity: 5,
      },
      {
        id: 1,
        item: 'Dell Monitor',
        totalQuantity: 40,
        availableQuantity: 23,
        onLoanQuantity: 17,
      },
      {
        id: 1,
        item: 'Headset',
        totalQuantity: 20,
        availableQuantity: 15,
        onLoanQuantity: 5,
      },
    ]);
  }
}
