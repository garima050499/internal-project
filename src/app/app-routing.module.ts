import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { AddTechnicalTrackComponent } from './add-technical-track/add-technical-track.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateComponent } from './candidate/candidate.component';
import { GraphRepresentationComponent } from './graph-representation/graph-representation.component';


const routes: Routes = [
  {path: 'leadership', component: GraphRepresentationComponent},
  {path: 'details', component: CandidateDetailsComponent},
  {path:'candidate', component: CandidateComponent},
  {path: 'requirement', component: AddRequirementComponent},
  {path:'technicalTrack',component:AddTechnicalTrackComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
