import { JobDetail } from "./JobDetail";
export class JobSchedule{
    constructor(public location: string, 
        public timeTaken: string, 
        public recordDate: Date, 
        public jobDetailList: JobDetail[]){

    }
}