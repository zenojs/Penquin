import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { CommunicationsComponent } from '../communications/communications.component'
import { MatchesComponent } from '../matches/matches.component'
import { PartnerComponent } from '../partner/partner.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'partner', component: PartnerComponent, },
  { path: 'matches', component: MatchesComponent, },
  { path: 'communications', component: CommunicationsComponent, },
  { path: 'login', component: LoginComponent, },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
