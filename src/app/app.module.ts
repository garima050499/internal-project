import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {GraphRepresentationComponent } from './graph-representation/graph-representation.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {TableComponent } from './table/table.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TableDialogComponent } from './table-dialog/table-dialog.component';

import {CandidateComponent } from './candidate/candidate.component';
import {CandidateStatusComponent } from './candidate-status/candidate-status.component'
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import {CIEditFormComponent } from './ciedit-form/ciedit-form.component';
import {MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule } from '@angular/material/select';
import {MatCardModule } from "@angular/material/card";
import {MatInputModule } from "@angular/material/input";
import {MatDatepickerModule } from "@angular/material/datepicker";
import { TrackNameComponent } from './track-name/track-name.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component'
import { LoadingInterceptor } from './loading.interceptor';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { AddTechnicalTrackComponent } from './add-technical-track/add-technical-track.component';


import { CandidateComponent } from './candidate/candidate.component';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CIEditFormComponent } from './ciedit-form/ciedit-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    GraphRepresentationComponent,
    SidebarComponent,
    TableComponent,
    TableDialogComponent,
    CandidateComponent,
    CandidateStatusComponent,
    CandidateDetailsComponent,
    CIEditFormComponent,
    CandidateComponent,
    CandidateStatusComponent,
    CandidateDetailsComponent,
    TrackNameComponent,
    SpinnerComponent,
    AddRequirementComponent,
    AddTechnicalTrackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [CandidateComponent,CandidateDetailsComponent,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
