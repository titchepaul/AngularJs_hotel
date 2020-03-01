import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomServiceService } from '../service/room-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { Observable } from 'rxjs';
import { Rooms } from '../MesClasses/rooms';

@Component({
  selector: 'app-crud-room',
  templateUrl: './crud-room.component.html',
  styleUrls: ['./crud-room.component.scss']
})
export class CrudRoomComponent implements OnInit {

  private myAllRooms: Observable<any>;

  constructor(private router: Router, private roomService: RoomServiceService, private toastr: ToastServiceService ){ 
  }

  ngOnInit() {
    this.myAllRooms = this.roomService.getAllOfRooms();
  }
  updateRoomNow(RoomsId: number) {
    this.roomService.getRoomsById(RoomsId).toPromise()
    .then(data => {
      this.roomService.updateOfRoom = data as Rooms;
      this.router.navigate(['update-of-rooms']);
    }).catch(
      data => console.log('Erreur data : ' + data)
    );
  }
  deleteOneRoom(RoomsId: number) {
    this.roomService.deleteOneRoom(RoomsId).toPromise()
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
