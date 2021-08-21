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
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonComponentsModule } from '../common/common.module';
import { MatInputModule } from '@angular/material/input';
import { UserLoanService } from './loan/services/user-loan.service';
import { UserLoanComponent } from './loan/containers/user-loan/user-loan.component';
import { UserLoanTableComponent } from './loan/components/user-loan-table/user-loan-table.component';
import { NewLoanRequestComponent } from './new-loan/containers/new-loan-request/new-loan-request.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NewRequestModalComponent } from './loan/components/user-loan-table/new-request-modal/new-request-modal.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InventoryService } from './loan/services/inventory.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    UserLoanComponent,
    UserLoanTableComponent,
    NewLoanRequestComponent,
    NewRequestModalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    UserRoutingModule,
    MatStepperModule,
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
    MatAutocompleteModule,
    RouterModule,
  ],
  providers: [UserLoanService, InventoryService],
})
export class UserModule {}
