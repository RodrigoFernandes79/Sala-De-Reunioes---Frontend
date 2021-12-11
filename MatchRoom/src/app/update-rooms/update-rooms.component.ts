import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-rooms',
  templateUrl: './update-rooms.component.html',
  styleUrls: ['./update-rooms.component.scss']
})
export class UpdateRoomsComponent implements OnInit {

  id:number;
  room:Room;
  submitted =false;

  constructor(private route:ActivatedRoute, private router:Router, private roomService:RoomService) { }

  ngOnInit():void {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoomById(this.id)
    .subscribe(data =>{
      console.log(data)
      this.room=data;
    },
    error => console.log(error)
    )
  }
updateRoom(): void{
  this.roomService.updateRoom(this.id, this.room)
    .subscribe(data => console.log(data), error=>console.log(error));
    this.room=new Room();
    this.goToList();
  }
  onSubmit(){
    this.updateRoom();
  }
  goToList(): void{
    this.router.navigate(['/rooms']);
  }
}

