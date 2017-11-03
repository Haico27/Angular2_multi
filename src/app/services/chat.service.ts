import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ChatService {
  public online: boolean = false;
  public usersList: number[];
  public userName: string;

  private socket = io();




  constructor() { }

  connectUser() {
    this.socket.emit('addUserToSocketList')
    this.socket.connect()
  }


  disconnectUser() {
    this.socket.emit('removeUserFromSocketList')
  }

  //get the current list of sockets from the server
  getConnectedUsersList() {
    let observable = new Observable(observer => {
      this.socket.on('updateSocketList', (list) => {
        observer.next(list)
      })
      return () => {
        this.socket.disconnect()
      }
    })
    return observable
  }












  // joinChat(user){
  //
  //   //transmits user details to the server
  //   this.socket.emit('addUserToSocketList', user)
  //
  //   let observable = new Observable(observer => {
  //
  //     //listens to users who connect to chat
  //     this.socket.on('hi', (connectUser) => {
  //       console.log(connectUser.name + ' connected to chat')
  //       this.userName = connectUser.name
  //
  //       observer.next(connectUser.name)
  //     })
  //     return () => {
  //       this.socket.disconnect()
  //     };
  //
  //   })
  //
  //   return observable
  // }
  //
  // leaveChat() {
  //   let observable = new Observable(observer => {
  //     this.socket.on("removeUserFromSocketList", (disconnectUser) => {
  //       console.log("disconnect user in chat.service", disconnectUser)
  //       this.userName = disconnectUser
  //       observer.next(disconnectUser)
  //     })
  //     return () => {
  //       this.socket.disconnect()
  //     }
  //   })
  //   return observable
  // }
  //
  // updateUsersList() {
  //   let observable = new Observable(observer => {
  //     this.socket.on("updateSocketList", function(onlineUsersList){
  //       this.usersList = onlineUsersList;
  //       console.log("currently online users: ", this.usersList)
  //       observer.next(onlineUsersList)
  //     })
  //     return () => {
  //       this.socket.disconnect()
  //     }
  //   })
  //
  //   return observable
  // }

  sendMessage(message) {
    this.socket.emit('chat message', message)
    console.log("message in chatService: ", message)
    console.log("user in chatService: ", message.sender)
  }

  getMessage() {
    let observable = new Observable(observer => {
      this.socket.on('chat message', function(message) {
        console.log("getMessage() in chatService: ", message)
        observer.next(message)
      })
    })

    return observable;
  }




}
