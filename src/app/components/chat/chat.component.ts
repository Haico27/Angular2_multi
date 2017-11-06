import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';






@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  newUser: boolean = false;
  newUserName: string = null;
  exitedUser: boolean = false;
  exitedUserName: string = null;
  onlineUsers: number[];





  // sets the sender if currentUser exists
  sender = this.currentUser ? this.currentUser.firstName : null;
  //creates a new instance of the Message-class, without any content yet
  message = new Message(this.sender, '');

  //creates an empty array to store the messages for showing them on the screen
  messages = [];

  constructor(
    private chatService:ChatService,
  ) {
    this.connectToSocket()

   }




  ngOnInit() {
      this.getMessage();
      //this.connectUser();
      this.getConnectedUsersList();
      this.displayDisconnectedUser();

  }

  ngOnDestroy() {
    this.disconnectUser()
  }

  connectToSocket(){
    this.chatService.connectToSocket(this.sender)
  }

  // connectUser(){
  //   this.chatService.connectUser(this.sender)
  // }

  disconnectUser(){
    this.chatService.disconnectUser()

  }

  displayDisconnectedUser(){
    this.chatService.getDisconnectedUser().subscribe((user: string) => {
      console.log("user in disconnectUser in chat.component: ", user)
      this.exitedUser = true;
      this.newUser = false;
      this.exitedUserName = user;
    })
  }

  getConnectedUsersList(){
    this.chatService.getConnectedUsersList().subscribe((list: number[]) => {
      this.onlineUsers = list;
    })
  }

  // connectToChat(){
  //   this.chatService.connectUser().subscribe((user: string) => {
  //     this.newUser = true;
  //     this.newUserName = user;
  //     this.exitedUser = false;
  //   })
  // }
  //
  // disconnectFromChat(){
  //   console.log("disconnecting user in chat.component")
  //   this.chatService.disconnectUser(this.sender)
  // }
  //
  // listenForDisconnectedUser() {
  //   this.chatService.listenForDisconnectedUser().subscribe((user: string) => {
  //     console.log("disconnected user in chat.component listenForDisconnectedUser-function: ", user)
  //   })
  // }






  //sends the message object with sender and text through to the sendMessage function in the chatService
  sendMessage() {
    console.log(this.message.text, this.message.sender)
    console.log(this.message)
    this.chatService.sendMessage(this.message);
    this.message.text = '';
    console.log("messages array in chat.component: ", this.messages)
    console.log("in chat.component, this.chatService.online: ", this.chatService.online)

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
