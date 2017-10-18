import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ChatService {
  private socket = io();


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
