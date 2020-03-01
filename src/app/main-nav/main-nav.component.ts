import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-main-nav', // <app-main-nav></app-main-nav>
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private route: Router, private autSer: AuthenticationService) {}

  public isConnect = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(){
      this.autSer.tokenValueIsEmpty();
      console.log('token vide où pas : ' + this.autSer.save);
  }
  
   connect() {
      // this.isConnect = false;
      // console.log('la valeur : ' + this.isConnect);
      this.route.navigate(['login']);
   }
   deconnect() {
      // this.isConnect = true;
      // console.log('la valeur : ' + this.isConnect);
      localStorage.clear();
      this.route.navigate(['login']);
   }
}
