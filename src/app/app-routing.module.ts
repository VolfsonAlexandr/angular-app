import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './menu-items/main/main.component';
import { AboutComponent } from './menu-items/about/about.component';
import { SignUpComponent } from './menu-items/signUp/signUp.component';
import { SignInComponent } from './menu-items/signIn/signIn.component';
import { PrivateOfficeComponent } from './private-office/private-office.component';

import { PersonalInfoComponent } from './private-office/personal-info/personal-info.component';
import { TeamComponent } from './private-office/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'privateoffice', component: PrivateOfficeComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}