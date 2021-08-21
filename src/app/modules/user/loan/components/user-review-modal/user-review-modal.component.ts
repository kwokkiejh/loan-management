import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  type: 'cancel' | 'approve';
  selectedId: number;
}

@Component({
  selector: 'user-review-modal.component.ts',
  templateUrl: './user-review-modal.component.html',
  styleUrls: ['./user-review-modal.component.scss'],
})
export class UserReviewModalComponent {
  loading = false;
  success = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onReturnClick() {
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
