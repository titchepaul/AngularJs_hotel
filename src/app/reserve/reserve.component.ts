import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  reservationForm: FormGroup;
  date = new Date();

  timeOptions = ['12:00', '12:30', '13:00' , '13:30' , '19:00', '19:30' , '20:00' , '20:30'];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  //client = { firstName: '', lastName: '', email: '', phone: ''};
  isScheduleOk = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: '',
      people: 1
    });
  }
  saveReservation() {
      if (this.reservationForm.valid) {
          console.log(this.reservationForm);
          this.isScheduleOk = true;
      }
  }
  finalizeReservation(form) {
      if (form.valid) {
        console.log('valid !!');
        console.log(form.value.firstName);
        console.log(form);
      }
  }

}
