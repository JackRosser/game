import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    this.getUser()
  }
  userUrl:string = "http://localhost:3000/user"

  bhUser = new BehaviorSubject<iUser[]>([])
  user$ = this.bhUser.asObservable()

  getUser() {
    this.http.get<iUser[]>(this.userUrl).subscribe({
      next: user => this.bhUser.next(user),
      error: err => console.error('Errore nel caricamento degli utenti', err)
    });
  }

  newGame() {
    this.http.delete(this.userUrl).subscribe({
      next: () => this.bhUser.next([]),
      error: err => console.log("errore nella cancellazione", err)

    })
  }


}
