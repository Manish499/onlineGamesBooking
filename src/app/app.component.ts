import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from '../../node_modules/rxjs';
export let browserRefresh = false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'onlineGamesBooking';
  subscription: Subscription;
  constructor(public router: Router) {
    localStorage.setItem('userInfo', JSON.stringify({'email':'user','password':'user','confirmPassword':''}));
    localStorage.setItem('adminInfo', JSON.stringify({'email':'admin','password':'admin','confirmPassword':''}));
    this.router.navigate(['']);
  }

  ngOnInit() {

  }
  ngOnDestroy() {
  }
}
