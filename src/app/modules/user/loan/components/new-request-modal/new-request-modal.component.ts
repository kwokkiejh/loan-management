import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Inventory } from 'src/app/modules/common/models/inventory';
import { map } from 'rxjs/operators';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'new-request-modal-component',
  templateUrl: './new-request-modal.component.html',
  styleUrls: ['./new-request-modal.component.scss'],
})
export class NewRequestModalComponent implements OnInit {
  loading = false;
  success = false;
  filteredOptions: Observable<Inventory[]>;
  itemControl = new FormControl('');
  options: Inventory[];

  constructor(private service: InventoryService) {
    this.service.inventoryTableData().subscribe((data) => {
      this.options = data;
      console.log(this.options);
    });
  }
  ngOnInit() {
    this.filteredOptions = this.itemControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }
  displayFn(inventory: Inventory): string {
    return inventory && inventory.item ? inventory.item : '';
  }

  filter(val: string): Inventory[] {
    console.log('here');
    // call the service which makes the http-request
    return this.options.filter((option) =>
      option.item.toLowerCase().includes(val.toLowerCase())
    );
  }

  onAddClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 1000);
  }
}
