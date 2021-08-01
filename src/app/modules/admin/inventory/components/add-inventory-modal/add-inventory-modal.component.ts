import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  type: 'cancel' | 'approve';
  selectedId: number;
}

@Component({
  selector: 'add-inventory-modal-component',
  templateUrl: './add-inventory-modal.component.html',
  styleUrls: ['./add-inventory-modal.component.scss'],
})
export class AddInventoryModalComponent {
  loading = false;
  success = false;

  onAddClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 1000);
  }
}
