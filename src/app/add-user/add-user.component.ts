import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { ToastServiceService } from '../service/toast-service.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  // tslint:disable-next-line: no-trailing-whitespace
  
  private myForm: FormGroup;
  // private myMDP: string;

  // tslint:disable-next-line: max-line-length
constructor(private toastr: ToastServiceService, private router: Router, private userService: UserServiceService, private authService: AuthenticationService) { }

  ngOnInit() {
      this.myForm = new FormGroup({
      UserEmail: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      UserRole: new FormControl('', [Validators.required])
    });
  }
        addDataUser() {
          // this.myMDP = this.authService.cryptOfPassword(this.myForm.get('Password').value);
          this.myForm.patchValue({Password: this.myForm.get('Password').value});
          this.userService.addUser(this.myForm.value).toPromise().then(
            data => {
                  this.toastr.showSuccess('Données bien ajoutées :)', 'Bravo !!');
                  this.router.navigate(['crud-user']);
            }).catch(error => {
                  this.toastr.showError('Données non ajoutées', 'Oops !!');
            // tslint:disable-next-line: no-trailing-whitespace
            });    
        }
}
