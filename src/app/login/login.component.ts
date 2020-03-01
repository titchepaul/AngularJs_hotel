import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastServiceService } from '../service/toast-service.service';
import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  
  // tslint:disable-next-line: max-line-length
  constructor(private nav: MainNavComponent, private toastr: ToastServiceService, private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      UserEmail: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required])
    });
  }
  connect() {
      this.authService.loginOfUser(this.myForm.get('UserEmail').value, this.myForm.get('Password').value).subscribe(data => {
          console.log('connect ok', data);
          console.log('token : ', data.token);
          this.toastr.showSuccess('connection réussi', 'Youpi !! poo');
          this.authService.saveTokenValue(data.token, data.userRole, data.userEmail);
          this.authService.tokenValueIsEmpty();
          // this.nav.checkValidator(this.check);
          if (localStorage.getItem('UserRole') === 'Admin') {
              this.route.navigate(['crud-user']);
          } else { 
              this.route.navigate(['']); // home 
          }
      },
      error => {
          console.log('erreur ', error);
          this.toastr.showError('Impossible de se connecter ', 'Oops !!');
      }
     );
  }

}
