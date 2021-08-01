import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddInventoryModalComponent } from '../../components/add-inventory-modal/add-inventory-modal.component';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.scss'],
})
export class AdminInventoryComponent {
  public tableData$: Observable<Inventory[]>;

  constructor(public dialog: MatDialog, private service: InventoryService) {
    this.tableData$ = service.inventoryTableData();
  }
  openAddInventoryModal() {
    this.dialog.open(AddInventoryModalComponent, {
      autoFocus: false,
    });
  }
}
