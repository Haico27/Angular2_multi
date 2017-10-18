import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';





@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatService:ChatService) {}

  // gets the currentUser from localStorage
  sender = JSON.parse(localStorage.getItem('currentUser'));
  //creates a new instance of the Message-class, without any content yet
  message = new Message(this.sender.firstName, '');

  //creates an empty array to store the messages for showing them on the screen
  messages = [];




  ngOnInit() {
      this.getMessage();
  }

  sendMessage() {
    console.log(this.message.text, this.message.sender)
    console.log(this.message)
    this.chatService.sendMessage(this.message);
    this.message.text = '';

  }

  getMessage() {
    this.chatService.getMessage().subscribe(message =>
      this.messages.push(message))
      console.log("messages array in chat.component: ", this.messages)
  }


}


export class Message {
  constructor(
    public sender: { firstName },
    public text: string,
  ) { }
}
