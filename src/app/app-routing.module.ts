import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component';
import { CandidateComponent } from './candidate/candidate.component';
import { GraphRepresentationComponent } from './graph-representation/graph-representation.component';


const routes: Routes = [
  {path: 'leadership', component: GraphRepresentationComponent},
  {path: 'details', component: CandidateDetailsComponent},
  {path:'candidate', component: CandidateComponent},
  {path: 'requirement', component: CandidateStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
