import { Component } from '@angular/core';
import { iUser } from '../../models/users';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {


// MOSTRO NUOVA PARTITA E BOTTONE
toggleNewGame:boolean = false
toggleInsertUser:boolean = true
required:boolean = false
defaultAvatar:string = "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"

user:iUser = {
  nickname: '',
  avatar: ''
}

localUser: iUser = JSON.parse(localStorage.getItem("user") || '{}');


newUser() {this.toggleNewGame = false, this.toggleInsertUser = true
  this.localUser = { nickname: '',
    avatar: this.defaultAvatar}
  localStorage.setItem("user", JSON.stringify(this.localUser))
}
addNick() {
  if(this.user.nickname != "") {
this.required = true
  } else {
    this.required = false
  }
}
startGame() {
if(this.user.avatar === "") {
  this.user.avatar = this.defaultAvatar
}
  localStorage.setItem("user", JSON.stringify(this.user))
}
}
