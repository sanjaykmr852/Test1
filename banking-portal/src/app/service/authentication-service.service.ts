import { Subject } from "rxjs";


export class AuthenticationService{

    isLogged:boolean=false;

    getSigninStatus=new Subject<boolean>();

    getStatus():boolean{
        return this.isLogged;
    }

    doLogOut(){
        this.isLogged=false;
    }
}