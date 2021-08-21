import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserLoanComponent } from './loan/containers/user-loan/user-loan.component';
import { NewLoanRequestComponent } from './new-loan/containers/new-loan-request/new-loan-request.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'loan', component: UserLoanComponent },
      { path: 'new-request', component: NewLoanRequestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
