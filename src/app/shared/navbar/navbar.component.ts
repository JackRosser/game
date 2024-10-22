import { Component } from '@angular/core';
import { iUser } from '../../models/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user: iUser = JSON.parse(localStorage.getItem("user") || '{}');

}
