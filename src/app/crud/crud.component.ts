import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  vare = 'bb';
  constructor(private https: HttpClient) { }

  ngOnInit() {
  }
  add(form) {
      console.log('bonjour');
      console.log(form.value.Email);
      this.https.post('https://localhost:44320/api/Users',
      {
        'Email' : form.value.Email,
        'Password' : form.value.Email
      }
      ).subscribe(
          data => {
            console.log('requête reussi ', data);
          },
          error => {
            console.log('erreur de la requête post', error);
          }
      );
  }

}
