import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../MesClasses/users';
import { ToastServiceService } from '../service/toast-service.service';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent implements OnInit {

    private myAllUsers: Observable<any>; 

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private userService: UserServiceService, private toastr: ToastServiceService ) { 
  }

  ngOnInit() {
      this.myAllUsers = this.userService.getAllOfUsers();
  }
  UpdateUserNow(UserEmail: string) {
    this.userService.getUserById(UserEmail).toPromise()
    .then(data => {
      this.userService.updateOfUser = data as Users;
      this.router.navigate(['update-of-users']);
    }).catch(
      data => console.log('Erreur data : ' + data)
    );
  }
  deleteOneUser(UserEmail: string) {
      this.userService.deleteOneUser(UserEmail).toPromise()
      .then(data => {
         this.toastr.showSuccess('Données bien supprimées :)', 'Bravo !!');
         this.router.navigate(['']);
         // this.router.navigate(['crud-user']);
      }).catch(
          data => {console.log('Erreur de suppression ' + data);
          // tslint:disable-next-line: align
          this.toastr.showWarning('Erreur de suppression', 'Oops !!')
      });
  }

}
