import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rooms } from '../MesClasses/rooms';
import { RoomServiceService } from '../service/room-service.service';
import { Router } from '@angular/router';
import { ToastServiceService } from '../service/toast-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booked-by-sm',
  templateUrl: './booked-by-sm.component.html',
  styleUrls: ['./booked-by-sm.component.scss']
})
export class BookedBySmComponent implements OnInit {
  myForm: FormGroup;
  roomsData: Rooms;
  RoomsId: FormControl;
  
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private roomService: RoomServiceService, private router: Router, private toastr: ToastServiceService) { }

    // RoomsId: new FormControl();
  ngOnInit() {
          this.roomsData = this.roomService.getUpdateOneRoom();
          this.myForm = new FormGroup({
          Status: new FormControl('', [Validators.required]),
          Enfants: new FormControl('', [Validators.required]),
          Adulte: new FormControl('', [Validators.required]),
          UserEmail: new FormControl('', [Validators.required]),
          RoomsId: new FormControl('', [Validators.required]),
        });
        // tslint:disable-next-line: label-position
          // tslint:disable-next-line: no-unused-expression       
          this.myForm.patchValue({
          Status: this.roomService.updateOfRoom.Status,
          Enfants: this.roomService.updateOfRoom.Enfants,
          Adulte: this.roomService.updateOfRoom.Adulte,
          RoomsId: this.roomService.updateOfRoom.RoomsId,
          UserEmail: this.roomService.updateOfRoom.UserEmail
         });
  }
  /*reserver(){
    this.http.put('https://localhost:44320/api/Rooms/update',
    {
      'UserEmail': this.myForm.get('email').value,
      'Password': this.myForm.get('pass').value,

    })
    .subscribe(
      data => {
        console.log('La requete post est réussie  ', data);
      },
      error => {
        console.log('Erreur requete post', error);
      }
    );
}
  }*/
  /*bookedOne() {
      console.log('my form : ' + this.myForm.value);
        // tslint:disable-next-line: align
        this.roomService.updateOneRoom(this.myForm.value).toPromise()
        .then(
          data => {
            this.toastr.showSuccess('Votre chambre a éte réservée :)', 'Bravo !!');
            this.router.navigate(['booked']);
          }
        ).catch(data => {
            this.toastr.showWarning('Erreur Veuillez réessayez svp', 'Oops !!');
        });
      }*/
}
