import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-lists',
  templateUrl: './room-lists.component.html',
  styleUrls: ['./room-lists.component.scss']
})
export class RoomListsComponent implements OnInit {
  
  rooms:Observable<Room[]>; 
  

  constructor(private roomService:RoomService, private router:Router) { }

  ngOnInit(): void {
    this.getRoom();
  }
 getRoom():void{
  
       this.rooms = this.roomService.getRoom();
        
    } 
    deleteRoomById(id:number):void{
      this.roomService.deleteRoomById(id).subscribe({
        next:() => {
          console.log('Deleted with success!');
          this.getRoom();
        },
        error: err => console.log('Erro!',err)
      })
    }
    roomDetails(id:number):void{
      this.router.navigate(['details',id]);
    }
    getRoomById(id:number):void{
      this.router.navigate(['update',id]);
    }
 
 }

  

