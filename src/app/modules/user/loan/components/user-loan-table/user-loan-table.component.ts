import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Loan } from '../../../../common/models/loan';

@Component({
  selector: 'user-loan-table-component',
  templateUrl: './user-loan-table.component.html',
  styleUrls: ['./user-loan-table.component.scss'],
})
export class UserLoanTableComponent implements OnInit {
  @Input() tableData: Loan[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Loan>;

  displayedColumns: string[] = ['item', 'quantity', 'status', 'actions'];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Loan>(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
