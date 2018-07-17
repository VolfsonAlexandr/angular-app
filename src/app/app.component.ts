import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  router: Router;

  constructor(
    private route: Router,
  ) {
    this.router = route;
  }

  title = 'app';

  onclick () {
    console.log('111!');
  }
}
