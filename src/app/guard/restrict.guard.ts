import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastServiceService } from '../service/toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictGuard implements CanActivate {
  constructor(private toastr: ToastServiceService, private auth: AuthenticationService, private route: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const agreeRoles = next.data.agreeRoles;
      console.log('RolesAgree Value : ' + next.data.agreeRoles);
      if (this.auth.tokenIsValid() === true ) {
        console.log('Your role : ' + localStorage.getItem('UserRole'));
        if (localStorage.getItem('UserRole').toString() == agreeRoles) {
          console.log('Role : ' + localStorage.getItem('UserRole'));
          return true;
        } else {
          this.toastr.showWarning('Désoler vous n\'avez pas les droits requis pour visiter cette page ', 'Oops !!');
          this.route.navigate(['login']);
          return false;
        }
      } else {
            this.toastr.showError('Désoler vous n\'avez pas les droits requis pour visiter cette page ', 'Oops !!');
            this.route.navigate(['login']);
            return false;
      }
  } 
}
