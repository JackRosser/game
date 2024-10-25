import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iMonster } from '../models/i-monsters';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http:HttpClient) { this.getPlayerCards(), this.getOpponentCards()}



private bhPlayerDeck = new BehaviorSubject<iMonster[]>([])
deck$ = this.bhPlayerDeck.asObservable()
serviceArray!:iMonster[]


private bhOpponentCards = new BehaviorSubject<iMonster[]>([])
opponent$ = this.bhOpponentCards.asObservable()

private getOpponentCards():void {
  this.http.get<iMonster[]>(environment.urlDeckOpponent).subscribe(list => {
    this.bhOpponentCards.next(list)
  })
}


private getPlayerCards() {
  this.http.get<iMonster[]>(environment.urlDeck).subscribe((cardList) => {
  this.serviceArray = cardList
  this.bhPlayerDeck.next(cardList)
})

}

addCard(card:Partial<iMonster>) {
this.http.post<iMonster>(environment.urlDeck, card).subscribe((newCard) => {
  this.serviceArray.push(newCard)
  this.bhPlayerDeck.next(this.serviceArray)
})
}

removeCard(id: number) {
  this.http.delete(`${environment.urlDeck}/${id}`).subscribe(() => {
    this.serviceArray = this.serviceArray.filter(card => card.id !== id);
    this.bhPlayerDeck.next(this.serviceArray);
  });
}

}
