import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../MesClasses/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public updateOfUser: Users;
  constructor(private http: HttpClient) {    
  }

  public addUser(myFormData: Users): Observable<any> {
    console.log('myData : ' + JSON.stringify(myFormData));
    return this.http.post('https://localhost:44320/api/Users', myFormData);
  }
  public getAllOfUsers(): Observable<any> {
    return this.http.get<any>('https://localhost:44320/api/Users');
  }

  public getUserById(UserEmail: string): Observable<any> {
    return this.http.get<any>('https://localhost:44320/api/Users/' + UserEmail);
  }
  public updateOneUser(formValue: Users): Observable<any> {
    console.log('My Users : ' + JSON.stringify(formValue));
    return this.http.put('https://localhost:44320/api/Users/' + formValue.UserEmail, formValue);
  }

  public getUpdateOneUser(): Users {
    return this.updateOfUser;
  }

  public set setOneUserUpdate(data: Users) {
    this.updateOfUser = data;
  }
  public deleteOneUser(UserEmail: string): Observable<any> {
    return this.http.delete('https://localhost:44320/api/Users/' + UserEmail);
  }
}
