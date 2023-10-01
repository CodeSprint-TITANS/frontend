export class JobDetail {
  constructor(public trips: number, 
    public estimatedTime: string, 
    public weatherFlag: boolean, 
    public congestionFlag: boolean, 
    public congestionTiming: string) {


  }
}