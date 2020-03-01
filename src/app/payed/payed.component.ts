import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RoomServiceService } from '../service/room-service.service';
import { ToastServiceService } from '../service/toast-service.service';

@Component({
  selector: 'app-payed',
  templateUrl: './payed.component.html',
  styleUrls: ['./payed.component.scss']
})
export class PayedComponent implements OnInit {
  private myAllRooms: Observable<any>;
  private receive: String;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private router: Router, private roomService: RoomServiceService, private toastr: ToastServiceService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-conditional-assignment
    // this.receive = localStorage.getItem('UserEmail').toString();
     this.check();
  }
  check() {
    if (localStorage.getItem('UserEmail') !== null) {
      console.log('my log : ', localStorage.getItem('UserEmail').toString() );
      this.myAllRooms = this.roomService.getAllOfRooms();
      this.receive = localStorage.getItem('UserEmail').toString();
    } else {
        this.toastr.showError('Veuillez vous connecter pour continuer svp !!' , 'Oops !!');
        this.router.navigate(['login']);
    }
  }
  paye(id: number) {
    if (localStorage.getItem('UserEmail') !== null ) {
      this.http.put('https://localhost:44320/api/Rooms/update',
      {
        // tslint:disable-next-line: object-literal-key-quotes
        'roomsId': id,                    // this.myForm.get('email').value,
        // tslint:disable-next-line: object-literal-key-quotes
        'userEmail': null,  // this.myForm.get('pass').value,
        'status' : false       
      })
      .subscribe(
        data => {
          // console.log('La requete put est réussie  ', data.toString());
          this.toastr.showSuccess('Merci d\'avoir payé ', 'A tantôt !!');
          this.router.navigate(['']);
        },
        error => {
          console.log('Erreur requete post', error);
          this.toastr.showWarning('Erreur lors du paiement' , 'Oops');
        }
      );
    } else {
      this.toastr.showError('Veuillez vous connectez pour continuez svp', 'Oops !!');
      this.router.navigate(['login']);
    }
  }

}
