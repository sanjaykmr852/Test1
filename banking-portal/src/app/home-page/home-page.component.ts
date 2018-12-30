import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../service/data-service.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild('form') formData:NgForm;
  isValid:boolean=true;
  dataArray=[];
  constructor(private dataService:DataService,private router:Router,
    private authService:AuthenticationService) { }

  ngOnInit() {
    this.changeBgColor();
    this.authService.getSigninStatus.subscribe((status:boolean)=>{
      this.authService.isLogged=status;
      if(status){
        this.router.navigate(['loadtransactions']);
      }
    });
  }

  changeBgColor(){
    var body=document.getElementsByTagName('body')[0];
    body.style.backgroundColor='darkblue';
  }

  onSumbit(){
    this.isValid=true;
        var username=this.formData.value['email'];
    var password=this.formData.value['password'];
    var data=this.dataService.getData().subscribe(
      (data:Response)=>{
        var storedData=data.json();
        for(let key in storedData){
            this.dataArray.push(storedData[key]);
            this.isValid= storedData[key]['email']===username && storedData[key]['password']===password;
            this.authService.getSigninStatus.next(this.isValid);
            }

                }
  );;
  }
}
