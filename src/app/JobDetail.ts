export class JobDetail{
    constructor(public trips: Number, 
        public estimatedTime: string, 
        public weatherFlag: boolean, 
        public congestionFlag: boolean, 
        public congestionTiming: string) {


    };
}