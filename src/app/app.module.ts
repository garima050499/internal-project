import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphRepresentationComponent } from './graph-representation/graph-representation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TableDialogComponent } from './table-dialog/table-dialog.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component'

@NgModule({
  declarations: [
    AppComponent,
    GraphRepresentationComponent,
    SidebarComponent,
    TableComponent,
    TableDialogComponent,
    CandidateComponent,
    CandidateStatusComponent
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
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
