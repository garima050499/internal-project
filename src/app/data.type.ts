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
    TrackName:string,
    MobileNo:string,
    JobTitle:string,
    Source:string,
    Grade:number,
    BaseLocation:string,
    Experience:string,
    Skill:string,
    Status:string,
    InterViewDate:string,
    Panel:string,
    Remarks:string,
    LWD:string,
    isInternal:boolean,
    id:number
}