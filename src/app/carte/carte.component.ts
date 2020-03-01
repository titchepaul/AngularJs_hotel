import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  dogs =[
        {race: 'Berger allemand', name: 'wolfy'},
        {race: 'Buldog anglais', name: 'Mac Fly'},
        {race: 'Caniche', name: 'Rasta'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
