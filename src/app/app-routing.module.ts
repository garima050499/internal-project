import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDialogComponent } from './table-dialog/table-dialog.component';

const routes: Routes = [
  {
    path:'tableDialog',
    component:TableDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
