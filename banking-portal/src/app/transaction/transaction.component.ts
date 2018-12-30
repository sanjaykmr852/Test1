import { Component, OnInit } from '@angular/core';
import { DataTransaction } from '../service/model/data-transaction.model';
import { AuthenticationService } from '../service/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }
  data:DataTransaction[]=[];

  closeRowStatus:boolean=false;
  activeIndex:any=null;
  activeData:any=null;

  ngOnInit() {
    this.changeBgColor();
    //data which should be taken from DB
    this.data.push(
      new DataTransaction('HDFC','HDFC','$ 600','25 Dec 2018',this.getBank('Hdfc'),this.getBank('Hdfc'),
    'Description Sample', 'kuimar','45600455'),
    new DataTransaction('HDFC','SBI','$ 700','25 Dec 2018',this.getBank('Hdfc'),this.getBank('SBI'),
    'Description Sample1', 'kuimar1','4015600455'),
    new DataTransaction('HDFC','SBI','$ 700','25 Dec 2018',this.getBank('Hdfc'),this.getBank('SBI'),
    'Description Sample1', 'kuimar2','4015600455'),
    new DataTransaction('AXIS','INDIAN BANK','$ 700','27 Dec 2018',this.getBank('AXIS'),this.getBank('INDIANBANK'),
    'Description Sample1', 'kuimar3','4015600455'),
    );
  }

  changeBgColor(){
    var body=document.getElementsByTagName('body')[0];
    body.style.backgroundColor='white';
  }

  getBank(bankName:String){
    var imgPath:String='';
    switch(bankName){
      case 'HDFC':
      case 'hdfc':
      case 'Hdfc':imgPath='assets/banks/hdfc.png';break;
      case 'sbi':
      case 'SBI':
      case 'Sbi':imgPath='assets/banks/SBI.jpg';break;
      case 'AXIS':imgPath='assets/banks/AXIS.png';break;
      case 'INDIANBANK':imgPath='assets/banks/IndianBank.jpg';break;
      default: break;
    }
    return imgPath;
  }

  onclick(record,index){
    if(this.activeData!==record && this.activeData!==null){
      this.closeRowStatus=true;
    }else{
      this.closeRowStatus=!this.closeRowStatus;
    }
    this.activeIndex=index;
    this.activeData=record;
    console.log(record);
  }

  onClickCheckBox(event:Event){
    console.log(event)

  }

  doLogOut(){
    this.authService.doLogOut();
    window.history.back();
    //this.router.navigate(['login']);
  }

}
