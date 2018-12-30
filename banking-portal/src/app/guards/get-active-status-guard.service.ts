import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../service/authentication-service.service";
import { Injectable } from "@angular/core";



@Injectable()
export class GetActiveStatusGuard implements CanActivate{

    constructor(private authService:AuthenticationService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean{
        return this.getActivateStatus();
    }

    getActivateStatus():boolean{
        return this.authService.getStatus();
    }
}