import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RoomServiceService } from '../service/room-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { Rooms } from '../MesClasses/rooms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.scss']
})
export class BookedComponent implements OnInit {
  
  private myAllRooms: Observable<any>;


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private router: Router, private roomService: RoomServiceService, private toastr: ToastServiceService) { }

  ngOnInit() {
    this.myAllRooms = this.roomService.getAllOfRooms();
  }
  reserver(id: number) {
    if (localStorage.getItem('UserEmail') != null ) {
      this.http.put('https://localhost:44320/api/Rooms/update',
      {
        // tslint:disable-next-line: object-literal-key-quotes
        'roomsId': id,                    // this.myForm.get('email').value,
        // tslint:disable-next-line: object-literal-key-quotes
        'userEmail': localStorage.getItem('UserEmail').toString(),  // this.myForm.get('pass').value,
        'status' : true       
      })
      .subscribe(
        data => {
          // console.log('La requete put est réussie  ', data.toString());
          this.toastr.showSuccess('Merci d\'avoir réservé', 'Bravo !!');
          this.router.navigate(['']);
        },
        error => {
          console.log('Erreur requete post', error);
        }
      );
    } else {
      this.toastr.showError('Veuillez vous connectez pour continuez svp', 'Oops !!');
      this.router.navigate(['login']);
    }
}
  /*booked(RoomsId: number) {
    if (localStorage.getItem('UserEmail') != null ) {
      this.roomService.getRoomsById(RoomsId).toPromise()
      .then(data => {
        this.roomService.updateOfRoom = data as Rooms;
        this.router.navigate(['booked-by-sm']);
      }).catch(
        data => console.log('Erreur data : ' + data)
      );
    } else {
        this.toastr.showError('Veuillez s\'authentifier pour continuer, Merci', ' Oops !!');
        this.router.navigate(['login']);
    }
  }*/
}
