import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Loan } from '../../../../common/models/loan';
import { UserReviewModalComponent } from '../user-review-modal/user-review-modal.component';

@Component({
  selector: 'user-loan-table-component',
  templateUrl: './user-loan-table.component.html',
  styleUrls: ['./user-loan-table.component.scss'],
})
export class UserLoanTableComponent implements OnInit {
  @Input() tableData: Loan[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Loan>;
  selectedRow: Element;

  displayedColumns: string[] = ['item', 'quantity', 'status', 'actions'];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Loan>(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  resetSelectedRow() {
    this.selectedRow = null;
  }

  openReviewModal(id: number, type: string) {
    this.dialog.open(UserReviewModalComponent, {
      autoFocus: false,
      data: {
        type: type,
        selectedId: id,
      },
    });
  }
}
