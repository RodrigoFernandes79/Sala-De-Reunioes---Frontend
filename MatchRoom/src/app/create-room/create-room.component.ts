import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  
  room:Room = new Room();
  submitted =false;

  constructor(private roomservice:RoomService, private router:Router) { }

  ngOnInit(): void {
  }
  createRoom():void{
    this.submitted =false;
    this.room = new Room();

  }
  saveRoom(){
    this.roomservice.createRoom(this.room)
    .subscribe(data=>console.log(data), error => console.log(error));
    this.room =new Room();
    this.goToList();
  }
  goToList():void{
    this.router.navigate(['/rooms'])
  }
  onSubmit(){
    this.submitted=true;
    this.saveRoom();
  }
}
