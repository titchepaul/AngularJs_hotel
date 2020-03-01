import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rooms } from '../MesClasses/rooms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
   public updateOfRoom: Rooms;

  constructor(private http: HttpClient) { }

  public addRoom(myFormData: Rooms): Observable<any> {
    console.log('Ajout :' + JSON.stringify(myFormData));
    return this.http.post('https://localhost:44320/api/Rooms', myFormData);
  }
  public getAllOfRooms(): Observable<any> {
    return this.http.get<any>('https://localhost:44320/api/Rooms');
  }
  public getRoomsById(RoomsId: number): Observable<any> {
    return this.http.get<any>('https://localhost:44320/api/Rooms/' + RoomsId);
  }
  public getRoomsByStatus(): Observable<any> {
    return this.http.get<any>('https://localhost:44320/api/Rooms?Status=0');
  }
  public updateOneRoom(myFormData: Rooms): Observable<any> {
    console.log('My Room : ' + JSON.stringify(myFormData));
    return this.http.put('https://localhost:44320/api/Rooms/' + myFormData.RoomsId, myFormData);
  }
  public getUpdateOneRoom(): Rooms {
    return this.updateOfRoom;
  }

  public set setOneRoomUpdate(data: Rooms) {
    this.updateOfRoom = data;
  }
  public deleteOneRoom(RoomsId: number): Observable<any> {
    return this.http.delete('https://localhost:44320/api/Rooms/' + RoomsId);
  }
}
