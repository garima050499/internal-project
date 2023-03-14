export interface jobTracks{
    trackName:string,
    summitRequirement:number,
    pendngRequirement:number,
    fullfilledPositions:number,
    CIRejected:number,
    CIScheduled:number,
    CITBS:number,
   grandtotal:number
   TotalProposed:number
}
export interface CIRejected{
    name:string,
    employeeCode:number,
    jobTrack:string
}