import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminLoanComponent } from './loan/containers/admin-loan/admin-loan.component';
import { AdminInventoryComponent } from './inventory/containers/admin-inventory/admin-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'loan', component: AdminLoanComponent },
      { path: 'inventory', component: AdminInventoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
