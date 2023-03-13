import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component';
import { CandidateComponent } from './candidate/candidate.component';
import { GraphRepresentationComponent } from './graph-representation/graph-representation.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'leadership', component: GraphRepresentationComponent},
  {path:'candidate', component: CandidateComponent},
  {path: 'status', component: CandidateStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
