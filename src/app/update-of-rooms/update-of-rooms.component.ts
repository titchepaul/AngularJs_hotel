import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rooms } from '../MesClasses/rooms';
import { RoomServiceService } from '../service/room-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-of-rooms',
  templateUrl: './update-of-rooms.component.html',
  styleUrls: ['./update-of-rooms.component.scss']
})
export class UpdateOfRoomsComponent implements OnInit {
  myForm: FormGroup;
  roomsData: Rooms;

  constructor(private roomService: RoomServiceService, private router: Router, private toastr: ToastServiceService) { }

  ngOnInit() {
    this.roomsData = this.roomService.getUpdateOneRoom();
    this.myForm = new FormGroup({
    RoomsId: new FormControl('', [Validators.required]),
    Status: new FormControl('', [Validators.required]),
    NbrePieces: new FormControl('', [Validators.required]),
    Prix: new FormControl('', [Validators.required])
  });
   // tslint:disable-next-line: align
   // tslint:disable-next-line: align
     this.myForm.patchValue({
      RoomsId: this.roomService.updateOfRoom.RoomsId,
      Status: this.roomService.updateOfRoom.Status,
      NbrePieces: this.roomService.updateOfRoom.NbrePieces,
      Prix: this.roomService.updateOfRoom.Prix
     });
  }
  updateByLinkRoom() {
    this.roomService.updateOneRoom(this.myForm.value).toPromise()
    .then(
      data => {
        this.toastr.showSuccess('Données bien modifiées :)', 'Bravo !!');
        this.router.navigate(['crud-room']);
      }
    ).catch(data => {
        this.toastr.showWarning('Données non modifiées', 'Oops !!');
    });
}

}
