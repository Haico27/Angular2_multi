import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ChatService {
  private socket = io();

  joinChat(user){
    //transmits user details to the server
    this.socket.emit('join', user)



    let observable = new Observable(observer => {

      //listens to users who connect to chat
      this.socket.on('hi', function(onlineUser){
        console.log(onlineUser + ' connected to chat')
        observer.next(onlineUser)
      })

      //gets the list with current online users from the server
      this.socket.on('online users list', function(onlineUsersList){
        console.log("currently online users: ", onlineUsersList)
      })

    })
    return observable
  }


  disconnect(user){
    this.socket.emit('dc', user)
  }

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
