import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import { DataService } from './service/data-service.service';
import { Http, HttpModule } from '@angular/http';
import { TransactionComponent } from './transaction/transaction.component';
import { AuthenticationService } from './service/authentication-service.service';
import { GetActiveStatusGuard } from './guards/get-active-status-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [DataService,AuthenticationService,GetActiveStatusGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
