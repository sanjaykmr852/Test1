

export class DataTransaction{

  
    constructor(public fromBank:String,public toBank:String,public amount:String,public date:String,public fromImgPath:String,
        public toBankImg:String,public description:String,public receiverName:String,public toAccountNo:String){
            }
}