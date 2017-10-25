import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';






@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;


  constructor(
    private chatService:ChatService,
  ) { }



  // sets the sender if currentUser exists
  sender = this.currentUser ? this.currentUser.firstName : null;
  //creates a new instance of the Message-class, without any content yet
  message = new Message(this.sender, '');

  //creates an empty array to store the messages for showing them on the screen
  messages = [];




  ngOnInit() {
      this.getMessage();
      this.userJoinsChat();
  }


  userJoinsChat() {
    this.chatService.joinChat(this.sender).subscribe(user =>
      console.log("user in userJoinsChat function in chatcomponent: ", user)
    )
  }

  //sends the message object with sender and text through to the sendMessage function in the chatService
  sendMessage() {
    console.log(this.message.text, this.message.sender)
    console.log(this.message)
    this.chatService.sendMessage(this.message);
    this.message.text = '';
    console.log("messages array in chat.component: ", this.messages)

  }

  //activates the getMessage function in the chatService and pushes every new message in the messages-array
  getMessage() {
    this.chatService.getMessage().subscribe(message =>
      this.messages.push(message)
    )
  }


}


export class Message {
  constructor(
    public sender: string,
    public text: string,
  ) { }
}
