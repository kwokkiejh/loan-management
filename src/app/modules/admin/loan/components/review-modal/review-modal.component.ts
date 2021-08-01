import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  type: 'cancel' | 'approve';
  selectedId: number;
}

@Component({
  selector: 'review-modal.component.ts',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent {
  loading = false;
  success = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onApproveClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 1000);
  }

  onCancelClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 1000);
  }
}
