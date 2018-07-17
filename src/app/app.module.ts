import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './menu-items/main/main.component';
import { AboutComponent } from './menu-items/about/about.component';
import { SignUpComponent } from './menu-items/signUp/signUp.component';
import { SignInComponent } from './menu-items/signIn/signIn.component';
import { PrivateOfficeComponent } from './private-office/private-office.component';

import { PersonalInfoComponent } from './private-office/personal-info/personal-info.component';
import { TeamComponent } from './private-office/team/team.component';
import { StatisticsComponent } from './private-office/statistics/statistics.component';
import { EarningsComponent } from './private-office/earnings/earnings.component';
import { PlanComponent } from './private-office/plan/plan.component';
import { WalletComponent } from './private-office/wallet/wallet.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    SignUpComponent,
    SignInComponent,
    PrivateOfficeComponent,
    PersonalInfoComponent,
    TeamComponent,
    StatisticsComponent,
    EarningsComponent,
    PlanComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
