import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoanTableComponent } from './loan/components/loan-table/loan-table.component';
import { CommonComponentsModule } from '../common/common.module';
import { ReviewModalComponent } from './loan/components/review-modal/review-modal.component';
import { AdminLoanComponent } from './loan/containers/admin-loan/admin-loan.component';
import { LoanService } from './loan/services/loan.service';
import { AdminInventoryComponent } from './inventory/containers/admin-inventory/admin-inventory.component';
import { InventoryTableComponent } from './inventory/components/inventory-table/inventory-table.component';
import { AddInventoryModalComponent } from './inventory/components/add-inventory-modal/add-inventory-modal.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LoanTableComponent,
    AdminLoanComponent,
    AdminInventoryComponent,
    AdminComponent,
    ReviewModalComponent,
    InventoryTableComponent,
    AddInventoryModalComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CommonComponentsModule,
    MatProgressBarModule,
    RouterModule,
  ],
  providers: [LoanService],
})
export class AdminModule {}
