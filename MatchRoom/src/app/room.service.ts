import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  

  private courseUrl:string = 'http://localhost:8080/rooms'

  constructor(private httpClient:HttpClient) { }

  getRoom():Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.courseUrl)
  }
  deleteRoomById(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.courseUrl}/${id}`)
  }
  getRoomById(id:number):Observable<Room>{
    return this.httpClient.get<Room>(`${this.courseUrl}/${id}`)
  }
  createRoom(room:Room):Observable<Room>{
    return this.httpClient.post<Room>(this.courseUrl, room)
  }
  updateRoom(id: number, room: any): Observable<Object> {
    return this.httpClient.put(`${this.courseUrl}/${id}`, room);
  }
}
