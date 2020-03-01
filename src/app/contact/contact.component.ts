import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
numberToDisplay = '';

  standard = {
      firstName: 'Paul',
      lastName: 'Titche',
      role: 'Accueil',
      award: '',
      phoneNumber: '0458-541-478'
  };
  sommelier = {
    firstName: 'Gerard',
    lastName: 'Steven',
    role: 'Sommelier',
    award: 'Meilleur ouvrier fr 2019',
    phoneNumber: '0458-541-678'
};
 boucher = {
  firstName: 'Paul',
  lastName: 'Titche',
  role: 'boucher',
  award: '',
  phoneNumber: '0458-0271-478'
};
  constructor() { }

  ngOnInit() {
  }
  displayBig(telNumber) {
    console.log(telNumber);
    this.numberToDisplay = telNumber;
  }

}
