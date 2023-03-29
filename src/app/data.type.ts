import { Byte } from "@angular/compiler/src/util"

export interface jobTracks{
    trackName:string,
    summitRequirement:number,
    pendngRequirement:number,
    fullfilledPositions:number,
    CIRejected:number,
    CIScheduled:number,
    CITBS:number,
    id:number
}
export interface CIRejected{
    Name:string,
    EmployeeCode:number,
    JobTrack:string,
    Reason:string,
    Date:Date,
    id:number
}

export interface candidateList{
    EmployeeID:number,
    FirstName:string,
    LastName:string,
    Email:string,
    TechTrackId:number,
    MobileNo:string,
    JobTitle:string,
    Grade:number,
    BaseLocation:string,
    Experience:string,
    Skill:string,
    Status:string,
    InterviewDetailsId:number,
    Panel:string,
    Remarks:string,
    LWD:string,
    CreatedDate:string,
    UpdatedDate:string,
    isActive:Byte,
    CreatedBy:string,
    UpdatedBy:string,
    UpdatedComments:string,
    isInternal:boolean,
    id:number
}

export interface InterviewDetails{
    Id:number,
    ProjectId:number,
    InterviewType:string,
    InterviewDate:string,
    Panel:string,
    InterviewStatus:string,
    Remarks:string,
    CreatedBy:string,
    CreatedDate:string,
    UpdatedBy:string,
    UpdatedDate:string,
    UpdatedComments:string

}

export interface projectTable{
    ProjectId:number,
    Name:string,
    accountId:number,
    CreatedDate:string,
    id:number
}

export interface TechnicalTrack{
    Name:string,
    projectId:number,
    CreatedDate:string,
    id:number
}

export interface CandidateInterviewDTO{
    Id:number,
    IsInternal:Byte,
    EmployeeId:number,
    FirstName:string,
    LastName:string,
    Email:string,
    MobileNumber:string,
    TechTrackId:number,
    JobTitle:string,
    Grade:number,
    BaseLocation:string,
    Skill:string,
    Experience:number,
    LWD:string,
    InterviewDetailsId:number,
    ProjectId:number,
    InterviewType:string,
    InterviewDate:string,
    Panel:string,
    InterviewStatus:string,
    Remarks:string,
    CreatedDate:string,
    UpdatedDate:string,
    isActive:Byte,
    CreatedBy:string,
    UpdatedBy:string,
    UpdatedComments:string

}

export interface ProjectDTO{
    AccountId:number,
    Id:number,
    AccountName:string,
    ProjectId:string,
    ProjectName:string
}

export interface Account{
    Id:number,
    Name:string,
    CreatedDate:string
}

export interface ResourceRequirement{
    Id:number,
    Requirement:number,
    TrackId:number,
    ProjectId:string,
    CreatedDate:string
}
export interface ResourceView{
    Id:number
    TrackName:string,
    Requirement:number,
    PendingRequirement:number,
    FullfilledPositions:number,
    CIRejected:number,
    CIScheduled:number,
    CITBS:number,
    TotalProposed:number
}