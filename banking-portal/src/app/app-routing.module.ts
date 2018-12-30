import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionComponent } from './transaction/transaction.component';
import { GetActiveStatusGuard } from './guards/get-active-status-guard.service';

const routes: Routes = [
  {path:"login", component:HomePageComponent},
{path:"loadtransactions", component:TransactionComponent,canActivate:[GetActiveStatusGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
