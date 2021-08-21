import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory } from '../../../../common/models/inventory';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss'],
})
export class InventoryTableComponent implements OnInit {
  @Input() tableData: Inventory[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Inventory>;

  displayedColumns: string[] = [
    'item',
    'totalQuantity',
    'availableQuantity',
    'onLoanQuantity',
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Inventory>(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
