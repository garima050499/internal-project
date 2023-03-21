import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CIRejected } from '../data.type';
import { ChartDataService } from '../services/chart-data.service';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';

@Component({
  selector: 'app-ciedit-form',
  templateUrl: './ciedit-form.component.html',
  styleUrls: ['./ciedit-form.component.css']
})
export class CIEditFormComponent implements OnInit {

  constructor(private fromBuilder:FormBuilder,private chartData:ChartDataService, private router:Router,private matDialog:MatDialog) {
    
   }

  public editedData:CIRejected
  public CIRejectedFormData=this.chartData.CIRejectedFormEditData;
  CIRejectForm=this.fromBuilder.group({
    Name:this.CIRejectedFormData.Name,
    EmployeeCode:this.CIRejectedFormData.EmployeeCode,
    JobTrack:this.CIRejectedFormData.JobTrack,
    Reason:this.CIRejectedFormData.Reason,
    Date:this.CIRejectedFormData.Date,
    id:this.CIRejectedFormData.id
    
  })
  ngOnInit(): void {
  }
  saveForm(){
    
    this.editedData=this.CIRejectForm.value;
    this.chartData.editCIList(this.editedData).subscribe((result)=>{
      if(result){
        console.log("Edited");
        this.matDialog.open(TableDialogComponent,{
          width:'950px',
          height:'400px'  
        })
        
      }
    })

    console.log('Form data is ', this.CIRejectForm.value);
  }
}
