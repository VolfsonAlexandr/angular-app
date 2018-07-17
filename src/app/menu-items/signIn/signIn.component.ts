import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css']
})

export class SignInComponent {
  router: Router;

  constructor(
    private route: Router
  ) {
    this.router = route;
  }

  onSubmit() {
    this.router.navigateByUrl('/privateoffice');
  }
}