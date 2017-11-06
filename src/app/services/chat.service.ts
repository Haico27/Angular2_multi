import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ChatService {
  public online: boolean = false;
  public usersList: number[];
  public userName: string = null;

  private socket;


  constructor() { }


  //creates an instance of a socket with the userName as query. In this way, the userName is connected directly to the socket
  connectToSocket(user){
    this.userName = user;
    if (typeof io != "undefined") {
      this.socket = io({ query: "userName= " + this.userName })
    }

    this.socket.connect()
  }

  //listens to the addUserToSocket-event and puts the returned user in an observable, so the data can be used by the component
  getConnectedUser() {
    let observable = new Observable(observer => {
      this.socket.on('addUserToSocketList', (user) => {
        observer.next(user)
      })
      return () => {
        this.socket.disconnect()
      }
    })
    return observable
  }




  //fires the disconnect-event to the socket on the server
  disconnectUser() {
    this.socket.disconnect()

  }

  //gets disconnected user from the server for displaying message that user has left the chat
  getDisconnectedUser(){
    let observable = new Observable(observer => {
      this.socket.on('removeUserFromSocketList', (user) => {
        observer.next(user)
      })
      return () => {
        this.socket.disconnect()
      }
    })
    return observable
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
