import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Loan } from '../../models/loan';
import { ReviewModalComponent } from '../review-modal/review-modal.component';

@Component({
  selector: 'loan-table-component',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.scss'],
})
export class LoanTableComponent implements OnInit {
  @Input() tableData: Loan[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Loan>;

  displayedColumns: string[] = [
    'item',
    'quantity',
    'user',
    'status',
    'actions',
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Loan>(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openReviewModal(id: number, type: string) {
    this.dialog.open(ReviewModalComponent, {
      autoFocus: false,
      data: {
        type: type,
        selectedId: id,
      },
    });
  }
}
