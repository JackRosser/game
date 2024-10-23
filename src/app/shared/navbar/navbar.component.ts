import { Component, EventEmitter, Output } from '@angular/core';
import { iUser } from '../../models/users';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

@Output() sendElementalAttribute = new EventEmitter<string>()
elementalAttribute!:string

setAttribute(icon:string) {
this.elementalAttribute = icon

this.sendElementalAttribute.emit(this.elementalAttribute)
}


  user: iUser = JSON.parse(localStorage.getItem("user") || '{}');


icons:string[] = ["/utilities/icons/acqua.webp", "/utilities/icons/fuoco.webp", "/utilities/icons/vento.webp", "/utilities/icons/terra.webp", "/utilities/icons/erba.webp", "/utilities/icons/legendary.webp"]




}


