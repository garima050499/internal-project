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