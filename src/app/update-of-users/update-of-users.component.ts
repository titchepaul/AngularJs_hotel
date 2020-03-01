import { Component, OnInit } from '@angular/core';
import { Users } from '../MesClasses/users';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-update-of-users',
  templateUrl: './update-of-users.component.html',
  styleUrls: ['./update-of-users.component.scss']
})
export class UpdateOfUsersComponent implements OnInit {

  private usersData: Users;
  private myForm: FormGroup;
  private myMDP: string;

  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private userService: UserServiceService, private toastr: ToastServiceService, private authService: AuthenticationService) { }

  ngOnInit() {
      this.usersData = this.userService.getUpdateOneUser();
      this.myForm = new FormGroup({
      UserEmail: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      UserRole: new FormControl('', [Validators.required])
    });
     // tslint:disable-next-line: align
     // this.myMDP = this.authService.cryptOfPassword(this.myForm.get('Password').value);
     // tslint:disable-next-line: align
     this.myForm.patchValue({
      UserEmail: this.userService.updateOfUser.UserEmail,
      Password: this.userService.updateOfUser.Password,
      UserRole: this.userService.updateOfUser.UserRole
    });
  }
  updateByLink() {
      this.userService.updateOneUser(this.myForm.value).toPromise()
      .then(
        data => {
          this.toastr.showSuccess('Données bien modifiées :)', 'Bravo !!');
          this.router.navigate(['crud-user']);
        }
      ).catch(data => {
          this.toastr.showWarning('Données non modifiées', 'Oops !!');
      });
  }

}
