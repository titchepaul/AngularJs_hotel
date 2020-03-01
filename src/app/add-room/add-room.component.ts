import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomServiceService } from '../service/room-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
    myForm: FormGroup;
    
  constructor(private router: Router, private roomService: RoomServiceService, private toastr: ToastServiceService) { }

      ngOnInit() {
          this.myForm = new FormGroup({
          NbrePieces: new FormControl('', [Validators.required]),
          Prix: new FormControl('', [Validators.required]),
          Status: new FormControl('', [Validators.required])
        });
      }
      addDataRoom() {       
        this.myForm.patchValue({Status: this.myForm.get('Status').value});
        this.myForm.patchValue({NbrePieces: this.myForm.get('NbrePieces').value});
        this.myForm.patchValue({Prix: this.myForm.get('Prix').value});
        this.roomService.addRoom(this.myForm.value).toPromise().then(
          data => {
                this.toastr.showSuccess('Données Rooms bien ajoutées :)', 'Bravo !!');
                this.router.navigate(['crud-room']);
          }).catch(error => {
                this.toastr.showWarning('Données non ajoutées', 'Oops !!');
          // tslint:disable-next-line: no-trailing-whitespace
          });    
      }
}
