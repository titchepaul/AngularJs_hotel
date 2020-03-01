import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import sha256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  // tslint:disable-next-line: no-trailing-whitespace
  public save = true;
  constructor(private http: HttpClient, private route: Router) {    
  }
  /*
  /hachage du password, non utilsé car il faudrait le decrypter après...
  */
  public cryptOfPassword(myPassword: string): string {
      const hashPassword = sha256(myPassword);
      return hashPassword;
  }
  public loginOfUser(userEmail: string, password: string): Observable<any> {
    return this.http.post('https://localhost:44320/api/Users/login',
      {
        UserEmail: userEmail,
        Password: password
      });
  }
  public saveTokenValue(Token: string, UserRole: string, UserEmail: string) {
    localStorage.setItem('Token', Token);
    localStorage.setItem('UserRole', UserRole);
    localStorage.setItem('UserEmail', UserEmail);
  }
  public tokenValueIsEmpty(): boolean {
    if (localStorage.getItem('Token') != null) {
        this.save = false;
        return this.save;
    } else {
        this.save = true;
        return true;
    }
  }
  public tokenIsValid(): boolean {
    const data = new JwtHelperService();
    if (localStorage.getItem('Token') != null) {
      if (data.isTokenExpired(localStorage.getItem('Token')) === true) {
        console.log('Token non valide');
        return false;
      }
      return true;
    }
    console.log('Token vide');
    return false;
  }
}
