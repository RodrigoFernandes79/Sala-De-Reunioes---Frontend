import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListsComponent } from './room-lists/room-lists.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListsComponent,
    UpdateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
